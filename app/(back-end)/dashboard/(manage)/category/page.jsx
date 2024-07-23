// React Component (e.g., /components/TypesPage.js)
"use client"
import { useEffect, useState } from 'react';
import PageHeader from "@/components/backend/form/PageHeader";
import TableAction from "@/components/backend/TableAction";

export default function Page() {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTypes() {
      try {
        const response = await fetch('/api/category');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const mappedTypes = data.map(type => ({
          id: type.id,
          name: type.bgt_name,
          image: type.bgt_image,
          createdAt: new Date(type.bgt_created_at).toLocaleDateString(),
        }));
        setTypes(mappedTypes);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTypes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="ຂໍ້ມູນປະເພດສິນຄ້າ"
        href="/dashboard/category/new"
        linkTitle="ເພີ່ມຂໍ້ມູນປະເພດສິນຄ້າ"
      />
      {/* Table Actions */}
      <TableAction />
      <div className="py-8">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-2 py-1">
                Number
                </th>
                <th scope="col" className="px-16 py-3">
                Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Types of Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {types.map((type, index) => (
                <tr key={type.id}>
                  <td className="px-6 py-3">{index + 1}</td> {/* Number column */}
                  <td className="px-6 py-3">
                    {type.image ? <img src={type.image} alt={type.name} className="w-16 h-16 object-cover" /> : 'No Image'}
                  </td>
                  <td className="px-6 py-3">{type.name}</td>
                  <td className="px-6 py-3">{type.createdAt}</td>
                  <td className="px-6 py-3">
                    <button className="text-blue-500">Edit</button>
                    <button className="text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
