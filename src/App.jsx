import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StandList } from './features/catalog/components/StandList';
import { AppointmentScheduler } from './features/networking/components/AppointmentScheduler';
import { PaymentGateway } from './features/transactions/components/PaymentGateway';
import { HeatMap } from './features/analytics/components/HeatMap';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-white shadow-lg">
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
                                <div className="hidden md:flex space-x-8">
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

                <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
            </div>
        </Router>
    );
}

export default App;
