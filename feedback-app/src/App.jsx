import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackData from './data/feedbackData'


function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
    </>
    

  )
}

export default App