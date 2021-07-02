import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.scss';
import RestoServiceContext from "./components/resto-service-context";
import {Provider} from "react-redux";
import ErrorBoundry from "./components/error-boundry"
import RestoService from "./services/resto-service";
import store from "./store";
const restoservice = new RestoService();
ReactDOM.render(
   <Provider store = {store}>
       <ErrorBoundry>
           <RestoServiceContext.Provider value = {restoservice} >
                <App/>
           </RestoServiceContext.Provider>
       </ErrorBoundry>
   </Provider>
   ,document.getElementById("root")
)