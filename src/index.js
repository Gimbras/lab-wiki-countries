import React from  'react';
import ReactDOM from  'react-dom';
import  './index.css';
import App from  './App';
import reportWebVitals from  './reportWebVitals';
import { BrowserRouter} from  'react-router-dom';
// import  'bootstrap/dist/css/bootstrap.css';// stupid boostrap or npm craashes everytime, i refuse to use it


ReactDOM.render(

<BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
</BrowserRouter>,
document.getElementById('root')

);

  

// comment skipped to stay organized
reportWebVitals();