import { useState, useEffect, useContext, createContext } from "react"; 
import axios from "axios";

//context create kari authContext variable ma store karavie
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  //default axios
  // private.js na private route ma je useEffect ma res che tema header pass karvana badle ahi set kari daishu
  axios.defaults.headers.common['Authorization'] = auth?.token  
  // login karya pachi data aavyo e refresh thata jato ryo but local storage ma save rakhyo che tene get karva
  // palishrom func create karyu inside useEffect
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };

// have aane gamee tya use kaari shakie, kese karenge: index.js ma  configure karine
