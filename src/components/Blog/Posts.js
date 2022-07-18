import React from 'react'

import { Link } from 'react-router-dom'

function Posts({ post }) {

  return (
    <Link to={'/blog/' + post.id}
      className='
      w-11/12 bg-secondary md:w-1/2 h-auto ml-1 mr-1 mt-3 flex sm:flex-row flex-col space-y-4 sm:space-y-0 justify-between
      px-6 py-4 shadow-md items-start sm:items-center'
      key={post.id}
    >
      <div className='flex items-center'>
        <span className='text-4xl mr-3'>
          ✒️
        </span>
        <p>{post.title}</p>
      </div>
      <p>{post.createdAt}</p>
    </Link>
  )
}

export default Posts