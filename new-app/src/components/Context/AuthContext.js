import{createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, SetIsLoading]= useState(true);

    useEffect(() =>{
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if(token && userData){
            setUser(JSON.parse(userData));
        }

        SetIsLoading(false);
     
    }, []);

    const login = (userData, token) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout =() =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user, login, logout, isLoading}}>
            {children}
        </AuthContext.Provider>
    );


};

export const useAuth =( )=> useContext(AuthContext);