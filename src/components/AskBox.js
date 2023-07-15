import { Avatar } from '@mui/material'
import React from 'react'
import './css/AskBox.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/userSlice'

const AskBox = () => {
  const user = useSelector(selectUser)
  return (
    <div className='AskBox'>
      <div className='AskBox__info'>
        <Avatar src={user.photo}/>
      </div>
      <div className='AskBox__ask'>
        <p>What is your question or link?</p>
      </div>
    </div>
  )
}

export default AskBox
