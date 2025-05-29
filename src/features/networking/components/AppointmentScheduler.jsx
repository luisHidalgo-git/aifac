import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { CalendarIcon, UserGroupIcon, StarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { useAppointmentsStore } from '../../../store/appointments';

export function AppointmentScheduler() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMatch, setSelectedMatch] = useState(null);
  const { recommendedMatches, appointments, addAppointment } = useAppointmentsStore();

  const availableTimes = selectedMatch
    ? selectedMatch.availability
    : ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  const handleScheduleMeeting = () => {
    if (selectedDate && selectedTime && selectedMatch) {
      const appointment = {
        date: selectedDate,
        time: selectedTime,
        matchId: selectedMatch.id,
        matchName: selectedMatch.name,
        createdAt: new Date().toISOString(),
      };
      
      addAppointment(appointment);
      setSelectedDate("");
      setSelectedTime("");
      setSelectedMatch(null);
    }
  };

  return (
    <div className="px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Schedule Appointments
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4">Select Date & Time</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <CalendarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Time Slots
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    disabled={!selectedMatch}
                    className={`py-2 px-4 rounded-lg text-sm font-medium ${
                      selectedTime === time
                        ? "bg-blue-600 text-white"
                        : selectedMatch
                        ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleScheduleMeeting}
              disabled={!selectedDate || !selectedTime || !selectedMatch}
              className={`w-full py-2 px-4 rounded-lg ${
                selectedDate && selectedTime && selectedMatch
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } transition-colors mt-4`}
            >
              Schedule Meeting
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h3 className="text-xl font-semibold mb-4">Recommended Matches</h3>

          <div className="space-y-4">
            {recommendedMatches.map((match) => (
              <div
                key={match.id}
                onClick={() => setSelectedMatch(match)}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedMatch?.id === match.id
                    ? "border-blue-500 bg-blue-50"
                    : "hover:border-gray-300"
                }`}
              >
                <img
                  src={match.avatar}
                  alt={match.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4 flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 truncate">
                    {match.name}
                  </h4>
                  <p className="text-sm text-gray-500 truncate">
                    {match.specialty}
                  </p>
                  <div className="flex items-center mt-1">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {match.rating} ({match.totalMeetings} meetings)
                    </span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <span className="text-sm font-medium text-green-600 whitespace-nowrap">
                    {match.matchScore}% Match
                  </span>
                  <div className="text-xs text-gray-500 mt-1">
                    <ClockIcon className="h-4 w-4 inline mr-1" />
                    {match.availability.length} slots
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {appointments.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Your Appointments</h3>
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">{appointment.matchName}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(appointment.date), 'MMMM d, yyyy')} at {appointment.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-600">
                      {appointment.status}
                    </span>
                    <p className="text-xs text-gray-500">
                      Code: {appointment.confirmationCode}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}