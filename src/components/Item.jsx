const Item = ({ name, isPacked }) => {

    return (
        <li>
            { name } { isPacked && '✅' } 
        </li>
    ) 
}

export default Item;