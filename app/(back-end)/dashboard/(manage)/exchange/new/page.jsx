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
export default function NewPromotion() {
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
  selling_price
    average_profit
    promotion_name
    promotion_description
    start_date
    end_date
    */}

    const slug = generateSlug(data.promotion_name )
    data.slug = slug
    data.selling_price
    data.promotion_description
    data.start_date
    data.end_date
    data.emp_image = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      'api/promotion',
      data,
      "Promotion",
      reset
    );
    setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="ຈັດການຂໍ້ມູນໂປຣໂມຊັ່ນ" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="ຊື່ໂປຣໂມຊັ່ນ"
            name="promotion_name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="ລາຍລະອຽດໂປຣໂມຊັ່ນ"
            name="promotion_description"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ສ່ວນຫຼຸດ"
            name="selling_price"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ເວລາເລີ່ມຕົ້ນ"
            name="start_date"
            type='date'
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ເວລາສີ້ນສູດ"
            name="end_date"
            type='date'
            register={register}
            errors={errors}
            className='w-full'
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="ສ້າງຂໍ້ມູນໂປຣໂມຊັ່ນ"
          loadingButtonTitle="ກຳລັງສ້າງຂໍ້ມູນໂປຣໂມຊັ່ນ ກະລຸນາລໍ້ຖ້າ..."
        />
      </form>
    </div>
  )
}
