import React, { useEffect, useState } from 'react'

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './../../firebase/firebase.config';

import Posts from './Posts'

function Blog() {

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
        (posts.length > 0) ?
          <div className='w-full h-screen bg-tertiary flex flex-col items-center'>
            <p className='text-center mx-4 lg:mx-0 pt-40 mb-10'>
              Welcome to my personal space, here you could find:<br />notes about tech and web development. Book recommendations, some of my poems and many more!.<br />Only in spanish for now...
            </p>
            {
              posts.map(post => {
                return <Posts key={post.id} post={post} />
              })
            }
          </div>
          :
          <div className='w-full h-screen'>
            <p className='text-center mt-40 mb-10'>
              There are not any post yet.
            </p>
          </div>
      }
    </>
  )
}

export default Blog