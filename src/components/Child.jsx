import { useEffect, useState } from "react";

const Child = ({ sendData }) => {

    const [message, setMessage] = useState('Hi from Child');

    useEffect(() => {
      sendData(message);
    }, []);

  return (
    <div>
        <p>Child Component</p>
    </div>
  )
}

export default Child;