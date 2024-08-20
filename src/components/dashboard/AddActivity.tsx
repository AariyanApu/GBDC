'use client'

import { CldUploadButton } from 'next-cloudinary'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { mutate } from 'swr'
import { validationSchema } from '@/libs/validationSchema'
import { UploadResult } from '@/types/randomTypes'

export default function AddActivity() {
  const [imgUrl, setImgUrl] = useState(' ')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true)
    try {
      await fetch('/api/activities', {
        method: 'POST',
        body: JSON.stringify({
          title: values.title,
          imgUrl: values.imgUrl,
        }),
      })
      resetForm()
      toast.success('Activity Added Successfully')
    } catch (error) {
      console.error('Error adding activity:', error)
    } finally {
      setIsSubmitting(false)
      mutate('/api/activities')
    }
  }
  const handleUpload = (result: UploadResult) => {
    setImgUrl(result.info.public_id)
  }
  return (
    <Formik
      initialValues={{
        title: '',
        imgUrl: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className=" flex w-96 flex-col items-center justify-center gap-4 rounded-box bg-base-200  p-4">
          <h1 className="text-3xl ">Add Activity </h1>
          <Field
            name="title"
            placeholder="Enter Image Title...."
            className="input input-bordered mt-4 w-full "
          />

          <CldUploadButton
            uploadPreset="izet8iap"
            className=" btn btn-outline btn-neutral"
            onUpload={(result: any) => {
              const uploadResult = result as UploadResult
              setFieldValue('imgUrl', uploadResult.info.public_id)
              handleUpload(uploadResult)
            }}
          />
          <Field type="hidden" name="imgUrl" value={imgUrl} />
          <ErrorMessage
            name="imgUrl"
            component="div"
            className="text-red-500"
          />
          <button
            type="submit"
            className="btn btn-outline btn-neutral disabled:opacity-20"
            disabled={isSubmitting}
          >
            Submit Activities
          </button>
        </Form>
      )}
    </Formik>
  )
}
