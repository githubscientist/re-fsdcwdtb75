const Note = ({ note }) => {
    // '♥︎ ♡'
    // ternary operator / conditional operator
    return note.isImportant ? <li>{ note.content } { '♥︎' }</li> : <li>{note.content} { '♡' }</li>
}

export default Note;