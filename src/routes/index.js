import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/Home'

const index = () => {
  return (
    <div>
        <Route>
            <Home />
        </Route>
    </div>
  )
}

export default index