import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/index'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from 'pages/App/App'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  </React.StrictMode>,
  </Provider>
  
)
