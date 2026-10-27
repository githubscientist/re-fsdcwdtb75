const Item = ({ name, isPacked }) => {

    return (
        <div>
            {
                isPacked && <li>{name} {'✅'}</li>
            }
            { 
                !isPacked && <li>{name}</li>
            }
        </div>
    ) 
}

export default Item;