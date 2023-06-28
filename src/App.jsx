import React from "react";

import Header from "./Header.jsx";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./Notes.js";


console.log(Header);
function App() {
  return (
    <div>
      <Header />

      {notes.map(entry => <Note 
        id = {entry.key}
        noteTitle = {entry.title}
        noteContent = {entry.content}/>)}

      <Footer />
    </div>
  )
}

export default App;
