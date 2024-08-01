import React from 'react'
import styles from './add.module.css'

const Add = () => {
  return (
    <div>
      <button className={`${styles.add_bg} px-10 py-3 rounded-[50px] text-2xl font-bold text-white`}>
        +
        Add Article
      </button>
    </div>
  )
}

export default Add
