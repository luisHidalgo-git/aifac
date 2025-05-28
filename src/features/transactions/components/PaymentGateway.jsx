import React from 'react';

export function PaymentGateway() {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Payment Gateway</h2>
            <div className="bg-white shadow rounded-lg p-4">
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Card Number
                        </label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="**** **** **** ****"
                        />
                    </div>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                        Process Payment
                    </button>
                </form>
            </div>
        </div>
    );
}
