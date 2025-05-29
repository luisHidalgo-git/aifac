import React, { useState } from "react";
import {
  CreditCardIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

export function PaymentGateway() {
  const [paymentType, setPaymentType] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  });

  const spaces = [
    {
      id: 1,
      name: "Premium Corner Stand",
      size: "10x10m",
      price: 5000,
      location: "Main Hall",
      available: true,
    },
    {
      id: 2,
      name: "Standard Exhibition Space",
      size: "6x6m",
      price: 3000,
      location: "Gallery Wing",
      available: true,
    },
  ];

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
                </div>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Reserve Space
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4">Payment Details</h3>

          <div className="space-y-4">
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

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Process Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}