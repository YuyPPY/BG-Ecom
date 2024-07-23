"use client";
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { generateSlug } from '@/lib/generateSlug';
import { makePostRequest } from '@/lib/apiRequest';
import FormHeader from '@/components/backend/form/FormHeader';
import TextInput from '@/components/Forminputs/Textinput';
import ImageInput from '@/components/Forminputs/Imageinput';
import SubmitButton from '@/components/Forminputs/SubmitButton';
import TextareaInput from '@/components/Forminputs/TextAreainput';
import ToggleInput from '@/components/Forminputs/Toggleinput';
import { Select, SelectItem } from '@nextui-org/select';
import SelectInput from '@/components/Forminputs/SelectInput';

export default function NewProduct() {
  const [mappedTypes, setMappedTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchTypes() {
      try {
        const response = await fetch('/api/category');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const types = data.map(type => ({
          id: type.id,
          title: type.bgt_name,
        }));
        setMappedTypes(types);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTypes();
  }, []);

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
  const bgp_status = watch('status');

  async function onSubmit(data) {
    const slug = generateSlug(data.bgp_name);
    data.slug = slug;
    data.bgp_imageid = imageUrl;
    console.log(data);
    makePostRequest(
      setLoading,
      'api/products',
      data,
      "Products",
      reset
    );
    setImageUrl("");
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <FormHeader title="ຈັດການຂໍ້ມູນສິນຄ້າ" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 mt-12"
      >
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
          <Select
            label="Favorite Animal"
            placeholder="Select an animal"
            selectionMode="multiple"
            className="max-w-xs"
            name=''
          >
            {mappedTypes.map((type) => (
              <SelectItem key={type.id}>
                {type.title}
              </SelectItem>
            ))}
          </Select>
          
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="ສ້າງຂໍ້ມູນສິນຄ້າ"
          loadingButtonTitle="ກຳລັງສ້າງຂໍ້ມູນສິນຄ້າ ກະລຸນາລໍ້ຖ້າ..."
        />
      </form>
    </div>
  );
}
