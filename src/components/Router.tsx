import { Routes, Route } from 'react-router-dom'

import Event from '../pages/Event'

const Home = () => <h1>Home page</h1>

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/event/lesson/:slug' element={<Event />} />
  </Routes>
)

export default Router
