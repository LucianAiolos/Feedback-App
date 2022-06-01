import { useState } from 'react'
import FeedbackFrom from './components/FeedbackFrom'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header"
import FeedbackData from './data/feedbackData'
import { v4 as uuidv4 } from 'uuid'



function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you wwant to delete?')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  } 

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
      <Header />
      <FeedbackFrom handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback}/>
      <FeedbackList 
        feedback={feedback} 
        handleDelete={deleteFeedback}
      />
    </>
    

  )
}

export default App