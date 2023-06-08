import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { CommentProvider } from './context/CommentProvider';
import { UserProvider } from './context/UserProvider';
import { BlogProvider } from './context/BlogProvider';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <CommentProvider>
        <BlogProvider>
          <UserProvider>
            <App/>
          </UserProvider>
        </BlogProvider>
      </CommentProvider>
    </BrowserRouter>
 
);


reportWebVitals();
