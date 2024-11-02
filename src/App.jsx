import React from 'react'
import HomePage from './pages/HomePage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import JobsPage from './pages/JobsPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />
}

export default App