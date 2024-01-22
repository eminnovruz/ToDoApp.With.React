import { createContext, useState } from "react"

const Context = createContext();

export default Context;

export const ContextWrapper = ({children}) => {
    const [email , setEmail] = useState('');
    const [authorized, setAuthorized] = useState(false);
    const [lightMode, setLightMode] = useState(true);


    const contextData = {
        email: email,
        setEmail: setEmail,
        authorized: authorized, 
        setAuthorized: setAuthorized,
        lightMode: lightMode,
        setLightMode, setLightMode,
    };

    return <Context.Provider value={contextData}>{children}</Context.Provider>
}