import React from "react";
import { Link } from "react-router-dom";

export function TopNav() {
  return (
    <nav className="bg-white shadow-lg hidden lg:block">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">AIFAC</span>
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
  );
}