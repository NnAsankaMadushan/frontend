import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import{
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import StudentregisterMain from './studentregister/StudentregisterMain';


const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
    },
    {
        path:"student",
        element: <StudentregisterMain/>
    },
    
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);