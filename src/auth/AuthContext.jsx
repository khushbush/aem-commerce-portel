import { createContext,useEffect,useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() =>{
        const savedUser = localStorage.getItem("user");
      
        if(savedUser){
            setUser(JSON.parse(savedUser));
               console.log("user logged in "+savedUser);

        }
    },[]);

    const login = (userData) =>{
        localStorage.setItem("user",JSON.stringify(userData));
        setUser(userData);
        console.log("user logged in "+localStorage.getItem("user"));

    };
     
    
    const logout = () =>{
        localStorage.removeItem("user");
        setUser(null);
    };

    return(
        <AuthContext.Provider value ={{user,login,logout}}>
            {children}
        </AuthContext.Provider>    
    );
}