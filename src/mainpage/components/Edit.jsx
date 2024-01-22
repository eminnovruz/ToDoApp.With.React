import React, { useContext, useState } from 'react'
import Context from '../ContextWrapper';

function Edit({dispatch , setCards, cards , activeCard}) { 
    const {lightMode } = useContext(Context);
    
    const [formData, setFormData]=useState({
        title: activeCard.title,
        description : activeCard.description
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
    };
    
    const editCard = (e)=>{
        e.preventDefault()
        console.log("clicked");
        const editedCards = cards.map((card) =>
          card === activeCard ? { ...card, ...formData } : card
        );
        // setCards(prevValue => ([...prevValue, formData]));
        setCards(editedCards)
        dispatch({type: ''});
    }
  
  
  
    return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <form className={`${lightMode ? "bg-[#B9D7EA] " : " bg-[#00ADB5] text-[#eee]" } text-[#eee] h-auto w-screen sm:w-[400px] bg-[#393E46] rounded-[16px] p-3`}>
            <h1 className='text-2xl font-bold text-center'>Edit Card!</h1>
            <div className='flex mt-2 flex-col p-1'>
                <label>Title</label>
                <input name='title' className='font-bold rounded-[9px] text-black' value={formData.title}
                onChange={(e) => {
                    handleChange(e)
                }}></input>
            </div>
            
            <div className='flex flex-col p-1'>
                <label>Description</label>
                <input name='description' type='text' className='font-bold rounded-[9px] text-black' value={formData.description}
                onChange={(e) => {
                    handleChange(e);
                }}></input>
            </div>
            
            <div className='mt-5 float-right'>
                <button type='submit' className={`${lightMode ? "bg-[#769FCD]" : " bg-[#00ADB5] text-[#eee]" } m-2 rounded-[9px] p-1 font-bold`}
                onClick={(e) => {
                    editCard(e)
                }}
                >Done!</button>
                <button type='submit' className={`${lightMode ? "bg-[#769FCD]" : " bg-[#00ADB5] text-[#eee]" } rounded-[9px] p-1 font-bold`}
                onClick={() => {
                    console.log('clicked')
                    dispatch({type: ''});
                }}
                >Cancel!</button>
            </div>
            
        </form>
    </div>
  )
}

export default Edit