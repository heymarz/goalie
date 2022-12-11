import { createContext, useState, useEffect } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) =>{
  const [currentUser, setCurrentUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);
  const [errors, setErrors] = useState([]);

  function loginUser(user){
    setCurrentUser(user);
    setLoggedin(true)
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedin(false);
  }

  function addErrors(errors){
    setErrors(errors)
  }
  function clearErrors() {
    setErrors([]);
  }

  useEffect(()=>{
    return()=>clearErrors();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    fetch("/me")
    .then(res=>{
      if(res.ok){
        res.json().then(user => {
          if(user){
          loginUser(user);
      }})
    }
  })
},[])

  return (
    <DataContext.Provider value = {{
      loggedin, logoutUser, currentUser, addErrors, clearErrors, errors
    }}>
      {children}
      </DataContext.Provider>
  )
}

export default DataContext