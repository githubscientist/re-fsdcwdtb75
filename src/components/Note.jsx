const Note = ({ note }) => {
    // '♥︎ ♡'
    if (note.isImportant) {
        return <li>{ note.content } { '♥︎' }</li>
    } 

    return <li>{note.content} { '♡' }</li>
}

export default Note;