import React, { useState, useEffect } from "react";
import { CreditCardIcon, BuildingOfficeIcon, ClockIcon, FireIcon } from "@heroicons/react/24/outline";
import { usePaymentsStore } from '../../../store/payments';

export function PaymentGateway() {
  const [paymentType, setPaymentType] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });

  const { spaces, reservations, addReservation, updateReservationStatus } = usePaymentsStore();
  const [countdown, setCountdown] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      reservations.forEach((reservation) => {
        if (reservation.status === 'pending') {
          const [minutes, seconds] = reservation.expiresIn.split(':').map(Number);
          let newMinutes = minutes;
          let newSeconds = seconds;

          if (newSeconds > 0) {
            newSeconds--;
          } else if (newMinutes > 0) {
            newMinutes--;
            newSeconds = 59;
          }

          if (newMinutes === 0 && newSeconds === 0) {
            updateReservationStatus(reservation.reservationId, 'expired');
          } else {
            setCountdown(prev => ({
              ...prev,
              [reservation.reservationId]: `${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`
            }));
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [reservations, updateReservationStatus]);

  const handleReserveSpace = (spaceId) => {
    addReservation(spaceId);
  };

  const handlePayment = (reservationId) => {
    if (formData.cardNumber && formData.expiryDate && formData.cvv && formData.name) {
      updateReservationStatus(reservationId, 'completed');
      setFormData({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        name: "",
      });
    }
  };

  return (
    <div className="px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Transactions
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4">
            Available Exhibition Spaces
          </h3>

          <div className="space-y-4">
            {spaces.map((space) => (
              <div key={space.id} className="border rounded-lg p-4">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h4 className="font-medium text-gray-900">{space.name}</h4>
                  <span className="text-green-600 font-medium">
                    ${space.price}
                  </span>
                </div>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>Size: {space.size}</p>
                  <p>Location: {space.location}</p>
                  <p>Features: {space.features.join(", ")}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center">
                      <FireIcon className="h-4 w-4 text-orange-500 mr-1" />
                      {space.popularity}% Popular
                    </span>
                    <span className="flex items-center">
                      <ClockIcon className="h-4 w-4 text-blue-500 mr-1" />
                      {space.remainingSpots} spots left
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => handleReserveSpace(space.id)}
                  disabled={!space.available}
                  className={`mt-3 w-full py-2 px-4 rounded-lg ${
                    space.available
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  } transition-colors`}
                >
                  {space.available ? 'Reserve Space' : 'Not Available'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>

          {reservations.length > 0 ? (
            <div className="space-y-6">
              {reservations.map((reservation) => (
                <div key={reservation.reservationId} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900">{reservation.name}</h4>
                      <p className="text-sm text-gray-500">{reservation.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-green-600">${reservation.price}</p>
                      {reservation.status === 'pending' && (
                        <p className="text-sm text-orange-500">
                          Expires in: {countdown[reservation.reservationId]}
                        </p>
                      )}
                    </div>
                  </div>

                  {reservation.status === 'pending' && (
                    <>
                      <div className="flex flex-col sm:flex-row gap-2 sm:space-x-4 mb-6">
                        <button
                          onClick={() => setPaymentType("card")}
                          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center ${
                            paymentType === "card"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <CreditCardIcon className="h-5 w-5 mr-2" />
                          Credit Card
                        </button>
                        <button
                          onClick={() => setPaymentType("transfer")}
                          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center ${
                            paymentType === "transfer"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                          Bank Transfer
                        </button>
                      </div>

                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            placeholder="**** **** **** ****"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.cardNumber}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                cardNumber: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              value={formData.expiryDate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  expiryDate: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="***"
                              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              value={formData.cvv}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  cvv: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cardholder Name
                          </label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => handlePayment(reservation.reservationId)}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Pay ${reservation.price}
                        </button>
                      </form>
                    </>
                  )}

                  {reservation.status === 'completed' && (
                    <div className="text-center py-4">
                      <p className="text-green-600 font-medium">Payment Completed</p>
                      <p className="text-sm text-gray-500">Thank you for your purchase!</p>
                    </div>
                  )}

                  {reservation.status === 'expired' && (
                    <div className="text-center py-4">
                      <p className="text-red-600 font-medium">Reservation Expired</p>
                      <p className="text-sm text-gray-500">Please make a new reservation</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
          : (
            <div className="text-center py-8 text-gray-500">
              No active reservations. Reserve a space to proceed with payment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}