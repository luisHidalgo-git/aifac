import React from "react";
import { Link } from "react-router-dom";

export function TopNav() {
  return (
    <nav className="bg-white shadow-lg hidden lg:block">
      <div className="max-w-[95vw] mx-auto px-4">
        <div className="flex justify-between top-nav-tv">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="flex items-center">
              <span className="text-4xl font-bold text-blue-600">AIFAC</span>
            </Link>
            <div className="flex space-x-8">
              <Link
                to="/stands"
                className="nav-item-tv text-gray-600 hover:text-gray-900 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Exhibition Stands
              </Link>
              <Link
                to="/appointments"
                className="nav-item-tv text-gray-600 hover:text-gray-900 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Networking
              </Link>
              <Link
                to="/payments"
                className="nav-item-tv text-gray-600 hover:text-gray-900 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Transactions
              </Link>
              <Link
                to="/analytics"
                className="nav-item-tv text-gray-600 hover:text-gray-900 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
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