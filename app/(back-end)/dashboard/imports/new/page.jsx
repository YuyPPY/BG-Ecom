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
export default function NewImports() {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      bgp_status: true,
    }
  });
  const bgp_status = watch('status')

  async function onSubmit(data) {
    {/* 
       bgim_receive_date 
  bgim_total        
  bgim_price        
  bgim_created_at   
  bgim_updated_at   
  bg_order_id       
    */}

    const slug = generateSlug(data.bgp_name)
    data.slug = slug
    data.bgp_price
    data.bgp_description
    data.bgp_stock
    data.bgp_status
    data.bgp_imageid = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      'api/imports',
      data,
      "imports",
      reset
    );
    setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="ນຳເຂົ້າສິນຄ້າ" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="ຊື່ສິນຄ້າ"
            name="bgp_name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="ລາຄາສິນຄ້າ"
            name="bgp_price"
            type='number'
            min="0"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ຈຳນວນສິນຄ້າທີ່ເຫຼືອ"
            name="bgp_stock"
            type="number"
            min="0"
            register={register}
            errors={errors}
            className='w-full'
          />

          <TextareaInput
            label="ລາຍລະອຽດສຶນຄ້າ"
            name="bgp_description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='categoryImageUploader'
            label="ຮູບສິນຄ້າ"
          />
          <ToggleInput
            label="ສະຖານະ"
            name="bgp_status"
            trueTitle="Active"
            falseTitle="InActive"
            register={register}
          />

        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="ສ້າງຂໍ້ມູນສິນຄ້າ"
          loadingButtonTitle="ກຳລັງສ້າງຂໍ້ມູນສິນຄ້າ ກະລຸນາລໍ້ຖ້າ..."
        />
      </form>
    </div>
  )
}
