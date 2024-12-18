import React from 'react'

const Refresh = () => {

     const refreshUser = () => {
       // dispatch(refreshUser());
     };
  return (
    <div>
      <button
        onClick={refreshUser}
        className="bg-blue-500  text-white dark:bg-opacity-45 px-4 py-2 rounded-md mb-10"
      >
        Refresh
      </button>
    </div>
  );
}

export default Refresh