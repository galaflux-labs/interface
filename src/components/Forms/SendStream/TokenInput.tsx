import React from 'react';
import { Label } from "../Common";




const TokenInput: React.FC = () => {

  return (
    <div>
      <Label label="Token"/>
      <button id="states-button" data-dropdown-toggle="dropdown-states"
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
              type="button">
          <svg
              width={20}
              height={20}
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
          >
              <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={12}
                  d="M22 154 92.51 28.224c1.529-2.726 5.451-2.726 6.98 0L170 154M96 87l37 67m-37 0-18.5-33.5"
              />
          </svg>
          TEST <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"/>
      </svg>
      </button>
    </div>
  );
};

export default TokenInput