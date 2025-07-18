import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestion] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/suggestions")
      .then(res => setSuggestion(res.data))
      .catch(err => (console.log("error")))



  }, [])
  return (
    <>
    <div className='suggestion-cont'>
     <b><div className='sfy'>Suggestions for you</div></b> 
      <hr />
      <div className="suggestion">
        {suggestions.map(item => (
          <div key={item.id} className="suggestion-item">
            <img src={item.profilePicture} alt="" className="suggestion-pic" />
            <p className="suggestion-name">{item.fullName}</p>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>
      </div>
    </>


  )
}


export default Suggestions