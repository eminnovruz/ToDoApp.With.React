import React, { useContext } from 'react'
import Context from '../ContextWrapper'

function Maincard({dispatch, data, setActiveCard}) {
  const { lightMode } = useContext(Context)

  return (
    <div className={`${lightMode ? "bg-[#D6E6F2] text-[#769FCD]" : " bg-[#EEE]"}  m-2  h-auto w-max-[250px] rounded-[16px] shadow shadow-zinc-700 flex flex-col`}>
        <h1 className={`text-center font-bold`}>{data.title}</h1>
        <h3 className='text-center'>{data.description}</h3>
        <div className='flex flex-col items-right p-5'>
            <button type='submit' className={`${lightMode ? " bg-[#769FCD]" : "bg-[#00ADB5] "} text-[#eee]  rounded-[9px] p-1 font-bold`}
            onClick={() => {
                dispatch({type: 'edit'})
                setActiveCard(data)
            }}
            >Edit</button>
            <button type='submit' className={`${lightMode? "bg-[#769FCD] " : "bg-[#00ADB5]"} mt-2 text-[#eee] bg-[#00ADB5] rounded-[9px] p-1 font-bold`}
            onClick={() => {
              dispatch({type: 'delete'})

                setActiveCard(data)
            }}
            >Delete</button>
        </div>
    </div>
  )
}

export default Maincard