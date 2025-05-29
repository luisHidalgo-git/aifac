import React from "react";
import { Link } from "react-router-dom";
import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  CreditCardIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export function BottomNav() {
  return (
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
  );
}