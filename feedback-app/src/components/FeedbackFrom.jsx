import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'


function FeedbackFrom() {

  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <Card >
      <h2>How would you rate your service with us?</h2>
      {/* @todo rating select component */}
      <div className="input-group">
        <input type="text" placeholder='write a review' onChange={handleTextChange} value={text}/>
        <button type='submit'>Sent</button>
      </div>
    </Card>
  )
}

export default FeedbackFrom
