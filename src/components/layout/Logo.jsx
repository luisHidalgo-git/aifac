import React from "react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div className="lg:hidden bg-white shadow-lg p-4">
      <Link to="/" className="flex justify-center">
        <span className="text-2xl font-bold text-blue-600">AIFAC</span>
      </Link>
    </div>
  );
}