import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import Home from './home'
import Contact from './Contact'
import About from './About'

export let RouteData = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path: "home", // Relative path (no leading slash needed inside children)
                element: <Home />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    }
])
