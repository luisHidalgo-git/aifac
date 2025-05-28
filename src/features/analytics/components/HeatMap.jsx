import React from 'react';

export function HeatMap() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Traffic Heat Map</h2>
            <div className="bg-white shadow rounded-lg p-4">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    {/* Heat map visualization would go here */}
                    <div className="p-4 text-center text-gray-500">
                        Heat Map Visualization
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="font-semibold">Statistics</h3>
                    <p className="text-gray-600">Peak Hours: 2PM - 4PM</p>
                    <p className="text-gray-600">
                        Most Visited: Gallery Section A
                    </p>
                </div>
            </div>
        </div>
    );
}
