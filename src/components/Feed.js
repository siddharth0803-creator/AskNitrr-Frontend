import React, { useEffect ,useState } from 'react'
import AskBox from './AskBox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'

const Feed = () => {
  const [posts, setposts] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/api/questions")
    .then((res)=>{
      console.log(res.data)
      setposts(res.data.reverse())
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])
  return (
    <div className='feed'>
      <AskBox/>
      {
        posts.map((post, index)=>(<Post key={index} post = {post}/>))
      }
    </div>
  )
}

export default Feed
