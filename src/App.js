import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Asknitrr from './components/Asknitrr';
import { login, selectUser } from './feature/userSlice';
import Login from './components/auth/Login';
import { auth } from './firebase';
import {onAuthStateChanged} from 'firebase/auth'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        dispatch(login({
          userName: authUser.displayName,
          photo : authUser.photoURL,
          email : authUser.email,
          uid: authUser.uid
        }))
      }
    })
  }, [dispatch])
  
  return (
    <div className="App">
    {
      user ? (<Asknitrr/>): (<Login/>)
    }
    </div>
  );
}

export default App;
