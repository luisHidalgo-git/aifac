import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, HeartIcon, EyeIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useStandsStore } from '../../../store/stands';

export function StandList() {
  const [filters, setFilters] = useState({
    artist: "",
    technique: "",
    priceRange: "all",
    trend: "all",
  });

  const { stands, incrementViews, toggleLike } = useStandsStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStands, setFilteredStands] = useState(stands);

  useEffect(() => {
    const filtered = stands.filter(stand => 
      stand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stand.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stand.technique.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStands(filtered);
  }, [searchTerm, stands]);

  const handleViewDetails = (standId) => {
    incrementViews(standId);
  };

  return (
    <div className="px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Exhibition Stands
        </h2>
        <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-2 sm:gap-4">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search stands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredStands.map((stand) => (
          <div
            key={stand.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={stand.image}
                alt={stand.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <span className="bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  {stand.views}
                </span>
                <button
                  onClick={() => toggleLike(stand.id)}
                  className="bg-white/80 backdrop-blur-sm rounded-full p-2"
                >
                  {stand.likes > 0 ? (
                    <HeartIconSolid className="h-4 w-4 text-red-500" />
                  ) : (
                    <HeartIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stand.name}
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">Artist:</span> {stand.artist}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Technique:</span> {stand.technique}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Price Range:</span> ${stand.priceRange}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Trend:</span> {stand.trend}
                </p>
              </div>
              <button 
                onClick={() => handleViewDetails(stand.id)}
                className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}