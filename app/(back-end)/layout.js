"use client"
import Navbar from '@/components/backend/Navbar'
import Sidebar from '@/components/backend/Sidebar'
import React,{useState} from 'react'

export default function layout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        // TODO: ໜ້າຈັດການ layout ຂອງ dashboard

        <div className='flex '>
            {/* Sidebar*/}
            <Sidebar showSidebar={showSidebar}  setShowSidebar={setShowSidebar}/>
            <div className='lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen'>
                {/* Hesder */}
                <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <main className=' p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16 ' >
                    {children}
                </main>
                {/* Main */}
            </div>
            {/* Main Body */}
        </div>
    )
}

