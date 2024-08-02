import React from 'react';
import styles from './Regist.module.css';
import Selector from '../components/Program_Selector/Selector';
import { SelectorProvider } from '../components/Program_Selector/Selector-Context';
import Form from '../components/Program_Selector/Form';
import Label from '../components/Program_Selector/Label';

const Regist = () => {
  return (
    <SelectorProvider>
      <div className={`${styles.index_bg} flex justify-center items-center p-20`}>
        <div className='w-[90%] h-[75vh] bg-black/20 p-10 rounded-[25px] flex flex-col justify-between dark:bg-white/20'>
          <div className='w-full bg-black/20 flex flex-row justify-between rounded-[15px] text-white font-medium h-[10%] text-xl cursor-pointer text-center'>
            <Selector />
          </div>
          <div className='h-[85%] w-full flex justify-between'>
            <Label />
            <form action="post" className='flex flex-col w-[92.5%] gap-5'>
              <div className={`h-[90%] w-full bg-black/20 rounded-[15px] overflow-y-scroll ${styles.no_scrollbar}`}>
                <Form />
              </div>
              <div className='h-[5%]'>
                <button type="submit" className='bg-white px-5 py-3 flex text-black justify-center items-center rounded-[70px] gap-2 font-semibold'>
                  Submit
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.99991 8L0.95166 1.34375C5.85131 2.76875 10.4717 5.01984 14.6137 8C10.4719 10.9801 5.8518 13.2312 0.95241 14.6562L2.99991 8ZM2.99991 8H8.62491" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SelectorProvider>
  );
}

export default Regist;
