import { useContext, useState } from 'react'
import Context from '../mainpage/ContextWrapper';

function Login() {
  const [isValid, setIsValid] = useState(false);
  const {setAuthorized, setEmail, email} = useContext(Context)

  return (
    <div className='w-screen h-screen bg-[#EEEEEE] fixed flex flex-col justify-center items-center'>
        <form  className='w-screen  sm:w-[400px] h-[auto] bg-[#222831] shadow shadow-zinc-700 flex flex-col justify-center items-center rounded-[16px]'>
            <h1 className='text-3xl mt-5 mb-5 text-[#EEEEEE] font-bold text-center'>Login Form</h1>
            <div className='flex flex-col p-2'>
                <label className='text-[#EEE]'>Email</label>
                <input type='email' className='w-[240px] h-auto rounded-[8px] font-bold'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsValid(e.target.checkValidity());
                }}
                ></input>
            </div>
            <button type='submit' className='mt-5 w-auto bg-[#EEE] p-[5px] mb-5 rounded-[12px] font-bold '
            onClick={() => {
              isValid ? setAuthorized(true) : null
            }}
            >Submit</button>
        </form>
    </div>
  )
}

export default Login