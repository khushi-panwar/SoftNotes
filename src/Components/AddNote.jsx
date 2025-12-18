import React, { useEffect, useState } from 'react'
import { BsPlusCircleFill } from "react-icons/bs";
import CreateNoteCard from './CreateNoteCard';

const AddNote = ({ notes, setNotes }) => {
  
  const [showColor, setShowColor] = useState(false)
  const colors = [
    "#FBC02D",
    "#FF8A65",
    "#B39DDB",
    "#26C6DA",
    "#DCE775"
  ];

  // create note 
  const createNote = (color) => {
    setNotes(prev => [
      ...prev,
      { id: Date.now(), color ,
        content: "",
        isEditing: true
      }
    ]);
    setShowColor(false);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-5'>
      <button className='w-13 h-13 text-4xl transition duration-300 ease-in-out hover:scale-110'
        onClick={() => { setShowColor(prev => !prev) }}
      ><BsPlusCircleFill /></button>
      {showColor && (
        <div className="flex flex-col gap-3 mt-4 ">
          {colors.map(color => (
            <div key={color}
              onClick={() => {createNote(color)}}
              className="w-6 h-6 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default AddNote
