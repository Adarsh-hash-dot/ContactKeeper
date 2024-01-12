import React from 'react';

const AddButton = ({handleClick}) => {
  return (
    <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
      <button
        className="bg-blue-500 text-white rounded-full p-4 pt-3 px-6 shadow-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:shadow-outline font-bold text-2xl"
        onClick={() => {
            handleClick()
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddButton;