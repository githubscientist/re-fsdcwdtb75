import { useState } from "react"
import Note from "./components/Note";

const App = () => {

  // Conditional Rendering
  // 3 ways
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: 'react is awesome',
      isImportant: true
    },
    {
      id: 2,
      content: 'meeting at 8pm',
      isImportant: false
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