// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackFrom from './components/FeedbackFrom'
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header"
// import FeedbackData from './data/feedbackData'
// import { v4 as uuidv4 } from 'uuid'
import AboutPage from './components/pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './components/context/FeedbackContext'

function App() {
  // const [feedback, setFeedback] = useState(FeedbackData)

  // const deleteFeedback = (id) => {
  //   if(window.confirm('are you sure you wwant to delete?')) {
  //     setFeedback(feedback.filter((item)=> item.id !== id))
  //   }
  // } 

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4()
  //   setFeedback([newFeedback, ...feedback])
  // }

  return (
    <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes >
              <Route exact path='/feedback-app' element={
                <>
                  <FeedbackFrom />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }>
                
              </Route>
              <Route path='/about' element={<AboutPage/>} />
            </Routes>
            <AboutIconLink />
          </div> 
      </Router>
    </FeedbackProvider>

  )
}

export default App