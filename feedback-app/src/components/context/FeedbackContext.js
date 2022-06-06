
import { createContext, useEffect, useState } from 'react'

import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(()=> {
    fetchFeedback()
  }, [])

  // Fetch Feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  //Delete feedback
  const deleteFeedback = async (id) => {
      if(window.confirm('are you sure you want to delete?')) {
        await fetch(`/feedback/${id}`, {method: 'DELETE'})

        setFeedback(feedback.filter((item)=> item.id !== id))
      }
    } 
  

  //Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await response.json()

    // newFeedback.id = uuidv4()
    setFeedback([data, ...feedback])
  }


  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  //Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem)
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item)=> item.id === id ? {
      ...item, ...data
    } : item))
  }

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is Feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is Feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is Feedback item 3',
      rating: 8
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  //Delete feedback
  const deleteFeedback = (id) => {
      if(window.confirm('are you sure you want to delete?')) {
        setFeedback(feedback.filter((item)=> item.id !== id))
      }
    } 
  

  //Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }


  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  //Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item)=> item.id === id ? {
      ...item, ...updItem
    } : item))
  }

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext