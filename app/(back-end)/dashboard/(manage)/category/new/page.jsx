"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import generateSlug from "@/lib/generateSlug";
import { generateSlug } from '@/lib/generateSlug'
import { makePostRequest } from '@/lib/apiRequest'
import FormHeader from '@/components/backend/form/FormHeader'
import TextInput from '@/components/Forminputs/Textinput'
import ImageInput from '@/components/Forminputs/Imageinput'
import SubmitButton from '@/components/Forminputs/SubmitButton'
export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
  });
  async function onSubmit(data) {
    {/* 
        -id
        -title
        -description
        -image
        -slug
        -stock
        -price
    */}

    const slug = generateSlug(data.bgt_name)
    data.slug = slug
    data.bgt_image = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      'api/category',
      data,
      "Category",
      reset
    );
    setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="ຈັດການຂໍ້ມູນປະເພດສິນຄ້າ" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="ຊື່ປະເພດສິນຄ້າ"
            name="bgt_name"
            register={register}
            errors={errors}

          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='categoryImageUploader'
            label="ຮູບປະເພດສິນຄ້າ"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="ສ້າງຂໍ້ມູນປະເພດສິນຄ້າ"
          loadingButtonTitle="ກຳລັງສ້າງຂໍ້ມູນປະເພດສິນຄ້າ ກະລຸນາລໍ້ຖ້າ..."
        />
      </form>
    </div>
  )
}
