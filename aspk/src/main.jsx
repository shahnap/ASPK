import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import RoutingPage from './RoutingPage.jsx';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RecoilRoot>
     <BrowserRouter>
  
  
    <RoutingPage/>
    </BrowserRouter>
    </RecoilRoot>
    </React.StrictMode>,
)
