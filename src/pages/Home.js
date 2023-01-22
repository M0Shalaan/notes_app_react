import React from "react";
import AddNote from "../components/AddNote";
import Header from "../components/Header";
import Note from "../components/Note";
import NotesList from "../components/NotesList";
// constants for app
const Home = () => {




  return (
    <div>
      <Header />
      <AddNote />
      {/* <NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>       */}
    </div>
  );
};

export default Home;
