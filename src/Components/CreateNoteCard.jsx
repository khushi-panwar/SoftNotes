import React from 'react'
import { RiPencilFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

const CreateNoteCard = ({ color, note, setNotes, }) => {


  // update function
  const updateContent = (value) => {
    setNotes(prev =>
      prev.map(n =>
        n.id === note.id ? { ...n, content: value } : n
      )
    )
  }
  // edit start function
  const startEditing = () => {
    setNotes(prev =>
      prev.map(n =>
        n.id === note.id ? { ...n, isEditing: true } : n
      )
    );
  };

  // stop editing function
  const stopEditing = () => {
    setNotes(prev =>
      prev.map(n =>
        n.id === note.id ? { ...n, isEditing: false } : n
      )
    );
  }
  // delete note
  const deleteNote = () => {
    setNotes(prev => prev.filter(n => n.id !== note.id));
  };

  return (
    <div className=" mt-8 h-50 p-3 rounded-lg relative"
      style={{ backgroundColor: color }}>
      {note.isEditing ? (
        <textarea className='w-full h-full bg-transparent resize-none outline-none'
          autoFocus
          placeholder='Write you note...'
          value={note.content}
          onChange={(e) => { updateContent(e.target.value) }}
          onBlur={stopEditing}// event handler that triggers when element loses focus 
        ></textarea>
      ) : (
        <>
          <p className='font-sans'>{note.content}</p>
          <button
            onClick={deleteNote}
            className="absolute bottom-12 right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
          ><AiFillDelete size={15} /></button>
          <button
            onClick={startEditing}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
          ><RiPencilFill size={15} /></button>
        </>
      )}
    </div>
  )
}

export default CreateNoteCard
