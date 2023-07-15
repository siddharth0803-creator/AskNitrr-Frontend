import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import AssignmentTurnedInOutlined from '@mui/icons-material/AssessmentOutlined'
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined'
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined'
import CloseIcon from '@mui/icons-material/Close'
import Search from '@mui/icons-material/Search'
import { Avatar, Button, Input} from '@mui/material'
import './css/NavBar.css'
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css'
import { ExpandMore } from '@mui/icons-material'
import axios from 'axios'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../feature/userSlice'

const Navbar=()=> {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [inputUrl, setinputUrl] = useState("")
  const [question, setquestion] = useState("")
  const Close= (<CloseIcon/>)
  const dispatch = useDispatch()
  const user= useSelector(selectUser)

  const HnadleLogout = ()=>{
    signOut(auth).then((result)=>{
      dispatch(logout())
      console.log('Logged out')
    }).catch(()=>{
      console.log('Error in Logout')
    })
  }

  const HandleSubmit= async ()=>{
    if(question !== ""){
      const payload= {
        questionName: question,
        questionUrl: inputUrl,
        user: user
      }
      try{
        const res=await axios.post("http://localhost:5000/api/questions",payload)
        console.log(res.data)
        setisModalOpen(false)
        window.location.href = "/";
      }catch(e){
        console.log(e)
      }
    }
  }

  return (
    <div className='navBar'>
      <div className='navBar-content'>
        <div className='navBar__logo'>
        <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className='navBar__icons'>
            <div className='navBar__icon'>
                <HomeIcon/>
            </div>
            <div className='navBar__icon'>
                <FeaturedPlayListOutlinedIcon />
            </div>
            <div className='navBar__icon'>
                <AssignmentTurnedInOutlined />
            </div>
            <div className='navBar__icon'>
                <PeopleAltOutlined />
            </div>
            <div className='navBar__icon'>
                <NotificationsOutlined />
            </div>
        </div>
        <div className='navBar__input'>
            <Search />
            <input type="text" placeholder='Search questions'/>
        </div>
        <div className='navBar__Rem'>
          <span onClick={HnadleLogout}><Avatar src = {user.photo}/></span>
        </div>
        <Button onClick={()=>setisModalOpen(true)}>Add Question</Button>
        <Modal
        open={isModalOpen}
        closeIcon={Close}
        onClose={()=>setisModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
          overlay:{
            height:"auto"
          }
        }}
        >
          <div className='modal__title'>
              <h5>Add Question</h5>
              <h5>Share Link</h5>
          </div>
          <div className='modal__info'>
            <Avatar src = {user?.photo} className='avatar'/>
            <div className='modal__scope'>
                <PeopleAltOutlined/>
                <p>Public</p>
                <ExpandMore/>
            </div>
          </div>
          <div className='modal__Field'>
            <Input 
            value={question}
            onChange={(e)=>setquestion(e.target.value)}
            type="text" placeholder='Shoot your question'/>
            <div style={{
              display:"flex",
              flexDirection:"column"
            }}>
            <input 
            style={{
              margin:"5px 0",
              border:"1px solid lightgray",
              padding:"10px",
              outline:"2px solid #000"
            }}
            value={inputUrl}
            onChange={(e)=>setinputUrl(e.target.value)}
            type="text" placeholder='Optional: include a link that gives context'/>
            {
              inputUrl !== ""&&<img 
              style={{
                height:"40vh",
                objectFit:"contain"
              }}
              src={inputUrl} alt='displayImage'/>
            }
            </div>
          </div>
          <div className='modal__buttons'>
            <button className='cancel' onClick={()=>setisModalOpen(false)}>
              Cancel
            </button>
            <button onClick={HandleSubmit} type='submit' className='add' >
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Navbar
