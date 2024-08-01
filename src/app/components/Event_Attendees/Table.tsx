"use client"

import React from 'react'
import { useSelectorContext } from '../Program_Selector/Selector-Context'
import ClassTable from './ClassTable'
import MentoringTable from './MentoringTable'
import PBITable from './PBITable'
import MainTable from './MainTable'

const Table = () => {
    const {selected, setSelected} = useSelectorContext();

    if (selected === 1) {
        return (
            <div>
                <ClassTable />
            </div>
        )
    }
    else if (selected === 2) {
        return (
            <div>
                <MentoringTable />
            </div>
        )
    }
    else if (selected === 3) {
        return (
            <div>
                <PBITable />
            </div>
        )
    }
    else if (selected === 4) {
        return (
            <div>
                <MainTable />
            </div>
        )
    }
}

export default Table
