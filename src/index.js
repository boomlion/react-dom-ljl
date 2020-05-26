import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Provider } from "redux-redux";
import * as serviceWorker from './serviceWorker';
import Routes from "./router";
import 'antd/dist/antd.css';
// import store from "./store/reducers/configState"
// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// const HotRoutes = hot(Routes)
ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
