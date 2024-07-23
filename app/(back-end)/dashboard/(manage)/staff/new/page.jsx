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
import ToggleInput from '@/components/Forminputs/Toggleinput'
import SelectInput from '@/components/Forminputs/SelectInput'
import Heading from '@/components/backend/Heading'
export default function NewStaff() {
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
      isActive: true,
    }
  })
  const isActive = watch("status")
  const role = [{
    id: 1,
    title: "admin",
  }, {
    id: 2,
    title: "user"
  }]
  async function onSubmit(data) {
    {/* 
  emp_fname    
  emp_lname    
  emp_gender   
  emp_village  
  emp_district 
  emp_provine  
  emp_image    
  emp_roles  
  role_name
  password
  ower_name
  status  
    */}

    const slug = generateSlug(data.emp_fname)
    data.slug = slug
    // data.emp_lname
    // data.emp_gender
    // data.emp_village
    // data.emp_district
    // data.emp_provine
    // data.emp_tel
    // data.role_name
    // data.password
    // data.ower_name
    // data.status
    data.emp_image = imageUrl
    console.log(data)
    makePostRequest(
      setLoading,
      'api/staff',
      data,
      "Staff",
      reset
    );
    setImageUrl("")
  }
  return (
    <div>
      <FormHeader title="ຈັດການຂໍ້ມູນພະນັກງານ" />
      {/* Form     */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="ຊື່ພະນັກງານ"
            name="emp_fname"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ນາມສະກຸນພະນັກງານ"
            name="emp_lname"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ເພດ"
            name="emp_gender"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ບ້ານ"
            name="emp_village"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ເມືອງ"
            name="emp_district"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ແຂວງ"
            name="emp_provine"
            register={register}
            errors={errors}
            className='w-full'
          />
          <TextInput
            label="ເບີໂທລະສັບ"
            name="emp_tel"
            type="phone"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint='categoryImageUploader'
            label="ເລືອກຮູບພະນັກງານ"
          />
          {/* <TextInput
            label="ຊື່ຜູ້ໃຊ້ລະບົບ"
            name="nickname"
            register={register}
            errors={errors}
            className='w-full'
          /> */}
          <TextInput
            label="ລະຫັດ"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className='w-full'
          />
          <SelectInput
            label="ລະດັບຜູ້ໃຊ້ລະບົບ"
            name="rolename"
            register={register}
            options={role}
            className='w-full'
          />
          <ToggleInput
          label="ສະຖານະ"
          name="status"
          trueTitle="Active"
          falseTitle="oop"
          register={register}
          className='w-full'
          isChecked={isActive}
          />


        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="ສ້າງຂໍ້ມູນພະນັກງານ"
          loadingButtonTitle="ກຳລັງສ້າງຂໍ້ມູນພະນັກງານ ກະລຸນາລໍ້ຖ້າ..."
        />
      </form>
    </div>
  )
}
