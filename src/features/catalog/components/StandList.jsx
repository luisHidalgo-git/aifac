import React from 'react';

export function StandList() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Exhibition Stands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example stand items */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="font-semibold">Gallery A</h3>
                    <p className="text-gray-600">Contemporary Art</p>
                </div>
                <div className="bg-white shadow rounded-lg p-4">
                    <h3 className="font-semibold">Gallery B</h3>
                    <p className="text-gray-600">Modern Art</p>
                </div>
            </div>
        </div>
    );
}
