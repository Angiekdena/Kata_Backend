import { createContext } from "react";
import { useState } from "react";

export const LoginNavContext = createContext()

export const LoginNavProvider = ({children}) => {
    const [email, setEmail] = useState([]);
    console.log('EMAIL: ', email)

return (
    <LoginNavContext.Provider value={{
        email,
        setEmail
    }
        
    }>
     {children}   
    </LoginNavContext.Provider>
    
)
}