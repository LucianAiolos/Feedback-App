import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header"
import FeedbackData from './data/feedbackData'


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you wwant to delete?')) {
      setFeedback(feedback.filter((item)=> item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <FeedbackStats feedback={feedback}/>
      <FeedbackList 
        feedback={feedback} 
        handleDelete={deleteFeedback}
      />
    </>
    

  )
}

export default App