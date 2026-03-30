import React from 'react';

const EmptyError = () => {
    return (
        <div className="border border-gray-400 rounded-lg py-15 text-center">
          <p className="text-gray-400 text-lg">🛒 Your cart is empty</p>
          <p className="text-sm text-gray-500 mt-2">
            Add some products to get started
          </p>
        </div>
    );
};

export default EmptyError;