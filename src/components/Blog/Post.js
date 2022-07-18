import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './../../firebase/firebase.config'

function Post() {

  let { id } = useParams()

  const [posts, cambiarPosts] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, 'posts'),
      (snapshot) => {
        const arregloPosts = snapshot.docs.map(documento => {
          return { ...documento.data(), id: documento.id };
        });

        cambiarPosts(arregloPosts);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <>
      {
        posts.map(post => {
          if (post.id === id) {
            return (
              <div className='h-full sm:h-screen bg-tertiary pb-16 md:pb-0' key={post.id}>
                <div className='mx-auto w-10/12 lg:w-1/2 pt-16 flex flex-col items-center space-y-7'>
                  <h1 className='text-center text-4xl'>{post.title}</h1>
                  <span>Latest update on {post.createdAt}</span>
                  <span className='text-6xl'>
                    ✒️
                  </span>
                  <p className='text-justify leading-relaxed'>
                    {post.text}
                  </p>
                </div>
              </div>
            )
          }
        })
      }
    </>
  )
}

export default Post