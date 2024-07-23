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
import TextareaInput from '@/components/Forminputs/TextAreainput'
import ToggleInput from '@/components/Forminputs/Toggleinput'
export default function NewCostomers() {
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
       
   bgc_fname    String
  bgc_lname    String
  bgc_tel      String
  bgc_image    String?
  bgc_password String
    */}

    const slug = generateSlug(data.bgc_fname)
    data.slug = slug
    data.bgc_lname
    data.bgc_tel
    data.bgc_password
    data.bgc_image = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      'api/costomers',
      data,
      "Costomers",
      reset
    );
    setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="ຈັດການຂໍ້ມູນລູກຄ້າ" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="ຊື່ລູກຄ້າ"
            name="bgc_fname"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ນາມສະກຸນລູກຄ້າ"
            name="bgc_lname"
            register={register}
            errors={errors}
            className='w-full'
          />
          
          <TextInput
            label="ເບີໂທລະສັບ"
            name="bgc_tel"
            type="phone"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ລະຫັດ"
            name="bgc_password"
            type="password"
            register={register}
            errors={errors}
            className='w-full'
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='costomersImageUploader'
            label="ເລືອກຮູບລູກຄ້າ"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="ສ້າງຂໍ້ມູນລູກຄ້າ"
          loadingButtonTitle="ກຳລັງສ້າງຂໍ້ມູນລູກຄ້າ ກະລຸນາລໍ້ຖ້າ..."
        />
      </form>
    </div>
  )
}
