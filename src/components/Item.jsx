const Item = ({ name, isPacked }) => {
    if (isPacked) {
        return <li>{name} {"✅"} </li>
    } 
    
    return <li>{name}</li>
}

export default Item;