import React from 'react'
import Heading from '../Heading'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function PageHeader({ heading,linkTitle, href }) {
    return (

        <>
            {/* Header */}
            <div className="flex justify-between  py-4 mb-4">
                <Heading title={heading} />
                <Link className="text-white bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-6bg-green-600/50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-6bg-green-600/55 me-2 mb-2 space-x-3 "
                    href={href} >
                    <Plus />
                    <span>{linkTitle}</span>
                </Link>
            </div>
        </>

    )
}
