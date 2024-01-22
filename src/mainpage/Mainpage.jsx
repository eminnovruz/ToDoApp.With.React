import React, { useContext, useEffect, useReducer, useState } from 'react'
import Nav from './components/Nav'
import Maincard from './components/Maincard'
import Create from './components/Create';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Context from './ContextWrapper';
import { FaLightbulb ,FaRegLightbulb } from "react-icons/fa";


const reducer = (state, action) => {
  switch (action.type) {
    case 'create':
      return {modalState: (state.modalState = 'create')};
    case 'edit':
      return {modalState: (state.modalState = 'edit')};
    case 'delete':
      return {modalState: (state.modalState = 'delete')};
    case '':
      return {modalState: (state.modalState = '')};
  }
};

function Mainpage() {
  const [cards, setCards] = useState([]);
  const [activeCard, setActiveCard] = useState();
  const [filteredCards, setFilteredCards] = useState([]);
  const {email, lightMode , setLightMode } = useContext(Context);
  const [state, dispatch] = useReducer(reducer, {modalState: ""});

  useEffect(() => {
    setFilteredCards(cards.filter((card) => card.author === email))
    console.log(cards)
  }, [cards])

  return (
    <div className={`${lightMode ? "bg-[#B9D7EA]" : " bg-[#222831]" } h-fit sm:h-screen`}>
      <Nav/>
      <div className='flex flex-col sm:flex-row p-2 '>
      <button   className={`${lightMode ? "bg-[#769FCD]" : " bg-[#00ADB5]" } p-1  text-[#eee]  rounded-[9px]  font-bold`}
          onClick={() => {
            dispatch({type: 'create'})
          }}
          >+ Add</button>

      <button className={`${lightMode ? "bg-[#769FCD]" : " bg-[#00ADB5]" } mt-3 sm:mt-0 sm:ml-2   text-[#eee] flex justify-center items-center  p-2 font-bold rounded-[9px]`}
      onClick={() => {
        setLightMode((prevValue)=>!prevValue)
      }}>
        {lightMode? <FaLightbulb /> :<FaRegLightbulb />}
          
      </button>
      </div>
      
        
        <div className='w-full  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          filteredCards.length?(
            filteredCards.map((card)=>
              <Maincard 
              key={card.id}
              data={card}
              setActiveCard={setActiveCard} 
              dispatch={dispatch}/>
            )
          ):(
            <p className='text-center col-span-3 mt-10 text-[#eee]'>No cards found</p>
          )
        }
        </div>

      {
        state.modalState === 'create' && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
            <Create dispatch={dispatch} setCards={setCards} email={email}/>
          </div>
        )
      }
      {
        state.modalState === 'delete' && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <Delete 
            dispatch={dispatch} 
            cards={cards} 
            activeCard={activeCard} 
            setCards={setCards}/>
          </div>
        )
      }
      {
        state.modalState === 'edit' && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75'>
            <Edit
           dispatch={dispatch}
           setCards={setCards}
           cards ={cards}
           activeCard={activeCard}/>
          </div>
        )
      }
    </div>
  )
}

export default Mainpage