import { createContext, useContext, useState } from "react";

// create context
export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        loggedIn: true,
        name: 'Sathish',
    });

  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
  )
}

export default UserProvider;

// custom hook to use the context
export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
}