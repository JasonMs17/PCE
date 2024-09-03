import React from 'react'
import { SelectorProvider } from '@/app/components/Program_Selector/Selector-Context'
import styles from './attendees.module.css'
import Download from '@/app/components/Event_Attendees/Download'
import Selector from '@/app/components/Program_Selector/Selector'
import Table from '@/app/components/Event_Attendees/Table'

const page = () => {
    return (
        <SelectorProvider>
            <div className={`${styles.index_bg} flex justify-center items-center md:px-20 py-40 gap-10 flex-col px-10`}>
                <div className='flex justify-between w-full flex-col md:flex-row gap-4 text-center md:text-start justify-end'>
                    <h1 className='font-bold md:text-4xl text-white text-xl'>Data Pendaftar Class Program</h1>
                    <Download />
                </div>
                <div className={`w-full h-[75vh] bg-black/20 p-4 md:p-10 rounded-[20px] gap-10 flex flex-col`}>
                    <div className={`w-full bg-black/20 flex flex-row justify-between rounded-[15px] text-white font-medium h-[10%] text-xl cursor-pointer text-center overflow-y-scroll ${styles.no_scrollbar}`}>
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
