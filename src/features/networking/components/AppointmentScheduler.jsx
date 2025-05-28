import React from 'react';

export function AppointmentScheduler() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Schedule Appointments</h2>
            <div className="bg-white shadow rounded-lg p-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select Date
                    </label>
                    <input
                        type="date"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Schedule Meeting
                </button>
            </div>
        </div>
    );
}
