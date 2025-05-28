import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export function AppointmentScheduler() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const availableTimes = [
        '09:00',
        '10:00',
        '11:00',
        '14:00',
        '15:00',
        '16:00',
    ];

    const recommendedMatches = [
        {
            id: 1,
            name: 'Gallery Modern Art',
            specialty: 'Contemporary Art',
            matchScore: 95,
            avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
        },
        {
            id: 2,
            name: 'Abstract Visions',
            specialty: 'Abstract Art',
            matchScore: 88,
            avatar: 'https://images.pexels.com/photos/1181687/pexels-photo-1181687.jpeg',
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Schedule Appointments
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                        Select Date & Time
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date
                            </label>
                            <div className="relative">
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) =>
                                        setSelectedDate(e.target.value)
                                    }
                                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <CalendarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Available Time Slots
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {availableTimes.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-2 px-4 rounded-lg text-sm font-medium ${
                                            selectedTime === time
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-4">
                            Schedule Meeting
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">
                        Recommended Matches
                    </h3>

                    <div className="space-y-4">
                        {recommendedMatches.map((match) => (
                            <div
                                key={match.id}
                                className="flex items-center p-4 border rounded-lg"
                            >
                                <img
                                    src={match.avatar}
                                    alt={match.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4 flex-1">
                                    <h4 className="font-medium text-gray-900">
                                        {match.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {match.specialty}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-sm font-medium text-green-600">
                                        {match.matchScore}% Match
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
