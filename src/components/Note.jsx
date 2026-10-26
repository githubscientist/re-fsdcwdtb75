const Note = ({ note }) => {
    // '♥︎ ♡'
    // ternary operator / conditional operator
    return <li>{ note.content } { note.isImportant && '♥︎'} { !note.isImportant && '♡'}</li>
}

export default Note;