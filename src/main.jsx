import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Component/AuthContext/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
    <AuthProvider>
   <QueryClientProvider client ={queryClient}>
   <RouterProvider router={router} />
   </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
 </div>
)
