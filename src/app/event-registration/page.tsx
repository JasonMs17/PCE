  import React from 'react';
  import styles from './Regist.module.css';
  import Selector from '../components/Program_Selector/Selector';
  import { SelectorProvider } from '../components/Program_Selector/Selector-Context';
  import Form from '../components/Program_Selector/Form';
  import Label from '../components/Program_Selector/Label';

  const Regist = () => {
    return (
      <SelectorProvider>
        <div className={`${styles.index_bg} flex justify-center items-center md:p-20 p-4`}>
          <div className='w-[90%] h-[75vh] bg-black/20 md:p-10 p-4 rounded-[25px] flex flex-col justify-between dark:bg-white/20'>
            <div className={`w-full bg-black/20 flex flex-row justify-between rounded-[15px] text-white font-medium h-[10%] text-xl cursor-pointer text-center overflow-y-scroll ${styles.no_scrollbar}`}>
              <Selector />
            </div>
            <div className='h-[85%] w-full flex justify-between gap-2'>
              <Label />
              <Form />
            </div>
          </div>
        </div>
      </SelectorProvider>
    );
  }

  export default Regist;
