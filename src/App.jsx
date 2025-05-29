import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StandList } from './features/catalog/components/StandList';
import { AppointmentScheduler } from './features/networking/components/AppointmentScheduler';
import { PaymentGateway } from './features/transactions/components/PaymentGateway';
import { HeatMap } from './features/analytics/components/HeatMap';
import {
    BuildingStorefrontIcon,
    UserGroupIcon,
    CreditCardIcon,
    ChartBarIcon,
} from '@heroicons/react/24/outline';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                {/* Desktop Navigation (Large screens only) */}
                <nav className="bg-white shadow-lg hidden lg:block">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex justify-between h-16">
                            <div className="flex space-x-8 items-center">
                                <Link
                                    to="/"
                                    className="flex items-center"
                                >
                                    <span className="text-2xl font-bold text-blue-600">
                                        AIFAC
                                    </span>
                                </Link>
                                <div className="flex space-x-8">
                                    <Link
                                        to="/stands"
                                        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Exhibition Stands
                                    </Link>
                                    <Link
                                        to="/appointments"
                                        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Networking
                                    </Link>
                                    <Link
                                        to="/payments"
                                        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Transactions
                                    </Link>
                                    <Link
                                        to="/analytics"
                                        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Analytics
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile and Tablet Logo */}
                <div className="lg:hidden bg-white shadow-lg p-4">
                    <Link
                        to="/"
                        className="flex justify-center"
                    >
                        <span className="text-2xl font-bold text-blue-600">
                            AIFAC
                        </span>
                    </Link>
                </div>

                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mb-20 lg:mb-0">
                    <Routes>
                        <Route
                            path="/stands"
                            element={<StandList />}
                        />
                        <Route
                            path="/appointments"
                            element={<AppointmentScheduler />}
                        />
                        <Route
                            path="/payments"
                            element={<PaymentGateway />}
                        />
                        <Route
                            path="/analytics"
                            element={<HeatMap />}
                        />
                        <Route
                            path="/"
                            element={<StandList />}
                        />
                    </Routes>
                </main>

                {/* Mobile and Tablet Navigation */}
                <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
                    <div className="flex justify-around items-center h-16">
                        <Link
                            to="/stands"
                            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
                        >
                            <BuildingStorefrontIcon className="h-6 w-6" />
                            <span className="text-xs mt-1">Stands</span>
                        </Link>
                        <Link
                            to="/appointments"
                            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
                        >
                            <UserGroupIcon className="h-6 w-6" />
                            <span className="text-xs mt-1">Network</span>
                        </Link>
                        <Link
                            to="/payments"
                            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
                        >
                            <CreditCardIcon className="h-6 w-6" />
                            <span className="text-xs mt-1">Pay</span>
                        </Link>
                        <Link
                            to="/analytics"
                            className="flex flex-col items-center text-gray-600 hover:text-blue-600"
                        >
                            <ChartBarIcon className="h-6 w-6" />
                            <span className="text-xs mt-1">Stats</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </Router>
    );
}

export default App;
