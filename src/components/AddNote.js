import { useState } from "react";
import { LinearProgress } from "@mui/material";

const AddNote = ({ handleAddNote }) => {
  // constants section
  const [noteText, setNoteText] = useState("");
  const noteCharLimit = 100;
  const noteCharLeft = noteCharLimit - noteText.length;

  //   handle limit of note text
  const handleChange = (event) => {
    if (noteCharLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  //   handle saving note
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      // the code below to reset note text section
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
        maxLength="100"
      ></textarea>
      <div className="note-footer">
        <small>{noteCharLeft} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char_progress"
        variant="determinate"
        value={noteCharLeft}
      />
    </div>
  );
};
export default AddNote;
