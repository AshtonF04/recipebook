import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div class="flex justify-between align-center">
        {/* Logo Button To Home Page */}
        <button 
        onClick={() => navigate('/')}
        class="text-3xl font-bold cursor-pointer"
        >
            RECIPEBOOK
        </button>

        {/* Create New Recipe Button */}
        <button 
        onClick={() => navigate('/')}
        class="font-bold bg-blue-500 py-3 px-5 rounded cursor-pointer hover:bg-blue-600 hover:transition-colors"
        >
            NEW RECIPE
        </button>
    </div>
  );
}

export default Navbar;
