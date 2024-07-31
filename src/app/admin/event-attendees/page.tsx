import React from 'react'
import { SelectorProvider } from '@/app/components/Program_Selector/Selector-Context'
import styles from './attendees.module.css'
import Download from '@/app/components/Event_Attendees/Download'
import Selector from '@/app/components/Program_Selector/Selector'
import Table from '@/app/components/Event_Attendees/Table'

const page = () => {
  return (
    <SelectorProvider>
        <div className={`${styles.index_bg} flex justify-center items-center px-20 py-40 gap-10 flex-col`}>
            <div className='flex justify-between w-full'>
                <h1 className='font-bold text-4xl text-white'>Data Pendaftar Class Program</h1>
                <Download />
            </div>
            <div className={`w-full h-[75vh] bg-black/20 p-10 rounded-[20px] gap-10 flex flex-col`}>
                <div className='w-full bg-black/20 flex flex-row justify-between rounded-[15px] text-white font-medium h-[10%] text-xl cursor-pointer text-center'>
                    <Selector />
                </div>
                <div className={`w-full h-[80%] bg-black/20 rounded-[20px] overflow-y-scroll ${styles.no_scrollbar}`}>
                    <Table />
                </div>
            </div>
        </div>
    </SelectorProvider>
  )
}

export default page
