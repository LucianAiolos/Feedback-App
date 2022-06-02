import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])

  const deleteFeedback = (id) => {
      if(window.confirm('are you sure you wwant to delete?')) {
        setFeedback(feedback.filter((item)=> item.id !== id))
      }
    } 

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext