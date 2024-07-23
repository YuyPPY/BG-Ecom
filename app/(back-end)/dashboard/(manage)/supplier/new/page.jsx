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
export default function NewSuplier() {
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
    */}

    const slug = generateSlug(data.bgs_fname)
    data.slug = slug
    data.bgs_lname      
    data.bgs_email      
    data.bgs_tel        
    data.bgs_address    
    console.log(data)
    makePostRequest(
      setLoading,
      'api/supplier',
      data,
      "Supplier",
      reset
    );
    setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="ຈັດການຂໍ້ມູນຜູ້ສະໜອງ" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="ຊື່ຜູ້ສະໜອງ"
            name="bgs_fname"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ນາມສະກຸນຜູ້ສະໜອງ"
            name="bgs_lname"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ອີເມວ"
            name="bgs_email"
            register={register}
            type='email'
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ເບີໂທລະສັບ"
            name="bgs_tel"
            type='phone'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ທີ່ຢູ່"
            name="bgs_address"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="ສ້າງຂໍ້ມູນຜູ້ສະໜອງ"
          loadingButtonTitle="ກຳລັງສ້າງຂໍ້ມູນຜູ້ສະໜອງ ກະລຸນາລໍ້ຖ້າ..."
        />
      </form>
    </div>
  )
}
