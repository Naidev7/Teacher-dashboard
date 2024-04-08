'use client';

// AnualHours.tsx
import React, { useState } from "react";

interface AnualHoursProps {
  totalHours: number;
}

const AnualHours: React.FC<AnualHoursProps> = ({ totalHours }) => {
  const [multipliedHours, setMultipliedHours] = useState<number | null>(null);
  const [showTotal, setShowTotal] = useState(false);

  const handleTotals = () => {
    const result = totalHours * 12;
    setMultipliedHours(result);
    setShowTotal(true);
  };

  const handleClose = () => {
    setShowTotal(false);
  };

  return (
    <div>
      <button
        onClick={handleTotals}
        className="text-gray-700 font-normal text-sm leading-5 cursor-pointer"
      >
        Anual
      </button>
      {showTotal && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-gray-700 font-normal text-sm leading-5">
              Total de horas anuales: {multipliedHours}
            </div>
            <button
              onClick={handleClose}
              className="mt-4 ml-9 px-4 py-2  bg-indigo-700 text-white rounded-md hover:bg-gray-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnualHours;
