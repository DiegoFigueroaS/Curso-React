import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HooksApp from './HooksApp.jsx'
import SimpleForm from './02-useEffect/SimpleForm.jsx'
import CustomForm from './02-useEffect/FormWithCustom.jsx'
import LotHooks from './03-examples/LotHooks.jsx'

createRoot(document.getElementById('root')).render(
  <LotHooks />
)
