import React, { useContext } from 'react'
import Context from '../ContextWrapper'




function Delete({dispatch, cards, activeCard, setCards}) {
  const {lightMode} = useContext(Context)

  const deleteCard=()=>{
    setCards(cards.filter((card) => card!== activeCard));
    dispatch({type: ''});
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <form className={`${lightMode ? "bg-[#B9D7EA] text-[#769FCD]" : " bg-[#393E46] text-[#eee]" } h-auto w-screen  sm:w-[400px] flex flex-col justify-center items-center shadow shadow-zinc-700 rounded-[16px] `}>
            <h1 className='font-bold text-2xl text-center mt-3'>Delete Card!</h1>
            <label className='text-center m-2'>Are you sure you want to delete card?</label>
            <div className='m-2'>
                <button className={`${lightMode ? "bg-[#769FCD] " : " bg-[#00ADB5] " } m-2 text-[#eee]  text-[#eee]  rounded-[9px] p-1 font-bold`}
                onClick={
                  deleteCard
                }
                >Delete</button>
                <button className={`${lightMode ? "bg-[#769FCD]" : " bg-[#00ADB5]" } text-[#eee] rounded-[9px] p-1 font-bold`}
                onClick={() => {
                  dispatch({type: ''});
                }}
                >Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default Delete