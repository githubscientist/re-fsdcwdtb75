import { useState } from "react"
import Note from "./components/Note";

const App = () => {

  // Dynamic List Rendering
  // Keys in React
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'react is awesome',
      isImportant: false
    },
    {
      id: 2,
      content: 'meeting at 8pm',
      isImportant: true
    },
    {
      id: 3,
      content: 'buy groceries',
      isImportant: true
    }
  ]);

  console.log(notes);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes
            .map(note => <Note note={note} key={note.id} />)
        }
      </ul>
    </div>
  )
}

export default App;