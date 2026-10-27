const Item = ({ name, isPacked }) => {

    return isPacked ? <li>{name} {"✅"} </li> : <li>{name}</li>
}

export default Item;