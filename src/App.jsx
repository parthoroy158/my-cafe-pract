
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [time, setTime] = useState(0)

  const handleAddBookmark = blog => {
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark);
  }

  const handleReading = (id, time) => {
    setTime(time + time);
    const removeBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeBookmarks);

  }



  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header></Header>
        <div className='md:flex justify-between gap-3'>
          <Blogs handleAddBookmark={handleAddBookmark} handleReading={handleReading}></Blogs>
          <Bookmarks bookmarks={bookmarks} time={time}></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
