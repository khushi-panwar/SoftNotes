import React, { useEffect, useState } from 'react'
// import icons
import { RxAvatar } from "react-icons/rx";
// import components
import SearchBar from './Components/SearchBar';
import AddNote from './Components/AddNote';
import CreateNoteCard from './Components/CreateNoteCard';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");// for search data storage


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);



  return (
    <div className='w-full'>
      <nav className='flex h-15 justify-between items-center text-lg p-2 '>
        <div className='flex justify-between space-x-2 md:space-x-9'>
          <h3 className='text-xl font-sans'>SoftNotes</h3>
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSearch={() => setSearchQuery(searchInput)}
          />
        </div>
        <a href="#"><RxAvatar /></a>
      </nav>
      <section className='flex'>
        <div className='md:w-1/8 md:h-screen md:border-r-gray-400 md:border-r-2 hidden md:block'>
          <AddNote
            notes={notes}
            setNotes={setNotes}
          />
        </div>
        <div className='md:flex-1  w-full  p-4 '>
          <p className='text-3xl font-sans font-semibold'>Notes!</p>
          <div className='grid grid-cols-3 gap-4'>
            {[...notes]
              .sort((a, b) => {
                const aMatch = a.content?.toLowerCase().includes(searchQuery.toLowerCase());
                const bMatch = b.content?.toLowerCase().includes(searchQuery.toLowerCase());

                if (aMatch && !bMatch) return -1; // a goes first
                if (!aMatch && bMatch) return 1;  // b goes first
                return 0; // keep original order
              })
              .map(note => (
                <CreateNoteCard
                  key={note.id}
                  color={note.color}
                  note={note}
                  setNotes={setNotes}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App