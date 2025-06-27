import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import Gestao from './pages/Gestao.jsx'
import Controle from "./pages/Controle.jsx"
import Monitoramento from "./pages/Monitoramento.jsx"

const router = createBrowserRouter([
  {
    // Main application route
    path:"/",
    element:<App />
  },
  {
    // Route for the Gestao (Management) page
    path:"/gestao",
    element:<Gestao />
  },
  {
    // Route for the Controle (Control) page
    path:"/controle",
    element:<Controle />
  },
  {
    // Route for the Monitoramento (Monitoring) page
    path:"/monitoramento",
    element:<Monitoramento />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
