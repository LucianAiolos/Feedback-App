import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'


function FeedbackFrom() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if ( text === '' ) {
      setBtnDisabled(true)
      setMessage(null)
    } else if ( text !== '' && text.trim().length <= 10 ) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  return (
    <Card >
      <h2>How would you rate your service with us?</h2>
      <RatingSelect />
      <div className="input-group">
        <input type="text" placeholder='write a review' onChange={handleTextChange} value={text}/>
       <Button type='submit' isDisabled={btnDisabled}>Send</Button>
      </div>

      {message && <div className='message'>{message}</div>}
    </Card>
  )
}

export default FeedbackFrom
