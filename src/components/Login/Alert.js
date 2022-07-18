import React from 'react'

function Alert({ message }) {
  return (
    <div
      className='
    bg-red-200
    border-red-600 text-red-700
      px-4 py-3 rounded relative
      mb-6 text-center
    '>
      <span className='sm:inline-block'>
        {message}
      </span>
    </div>
  )
}

export default Alert