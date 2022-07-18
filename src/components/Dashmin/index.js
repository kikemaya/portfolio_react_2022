import React, { useState } from "react"

import { useAuth } from "./../../context/authContext"

import { db } from './../../firebase/firebase.config';
import { collection, addDoc } from 'firebase/firestore';

import { Formik, Form, Field } from "formik"

function Dashmin() {

  const timeElapsed = Date.now()
  const today = new Date(timeElapsed)

  const { logout, loading } = useAuth()

  const [formularioEnviado, setFormularioEnviado] = useState(false)

  const handleLogout = async () => {
    try {
      return await logout()
    } catch (error) {
      return console.error(error);
    }
  }

  if (loading) return <h1>Loading...</h1>

  return (
    <div className='h-screen flex bg-tertiary'>
      <div className="w-full max-w-xs m-auto">
        <Formik
          initialValues={
            {
              titulo: '',
              article_blog: ''
            }
          }

          onSubmit={
            async (values, { resetForm }) => {
              resetForm()

              await addDoc(collection(db, 'posts'), {
                title: values.titulo,
                text: values.article_blog,
                createdAt: today.toDateString()
              });

              setFormularioEnviado(true)
              setTimeout(() => {
                setFormularioEnviado(false)
              }, 3000);
            }
          }
        >
          <Form>
            <div>
              <label htmlFor="titulo" className="Label-input mt-6">
                Title
              </label>
              <Field
                type='text'
                id='titulo'
                name='titulo'
                placeholder='A very exciting title!'
                className='input'
              />
            </div>
            <div>
              <label htmlFor="titulo" className="Label-input mt-6">
                Article
              </label>
              <Field
                type='mensaje'
                id='article_blog'
                name='article_blog'
                as='textarea'
                placeholder='A very exciting article!'
                className='input h-40 resize-none pt-4'
              />
            </div>
            <div className="flex justify-between mt-6">
              <button type="submit" className='btn py-2 px4 bg-accent hover:bg-secondary-hover'>
                Post
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className='btn py-2 px4 bg-accent hover:bg-secondary-hover'>
                Logout
              </button>
            </div>
            {
              (formularioEnviado) && <p className='mt-6 bg-red-200 text-red-800 text-center p-2 rounded-sm'>Form sent succesfully!</p>
            }
          </Form>
        </Formik>

      </div>
    </div>
  )
}

export default Dashmin