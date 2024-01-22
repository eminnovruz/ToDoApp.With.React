import React, { useContext } from 'react'
import Context from '../ContextWrapper';

function Nav() {
  const {email ,setAuthorized , lightMode} = useContext(Context);

  return (
    <div className={`${lightMode?"bg-[#D6E6F2] text-[#769FCD] ": "bg-[#393E46] text-[#eee]"} h-auto flex flex-end p-3 w-screen`} >
        <p className={`${lightMode? "text-black" : "text-[#eee]"}text-1xl font-bold`}>{email}</p>
        <div className='absolute top-0 right-0 p-2'>
          <button type='submit' className={`${lightMode? "bg-[#769FCD]" : "bg-[#00ADB5] "}  text-[#eee] rounded-[9px] p-1 font-bold`}
          onClick={() => {
            setAuthorized(false)
          }}
          >Log Out!</button>
        </div>
    </div>
  )
}

export default Nav