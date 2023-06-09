import React from 'react';
import Home from './routes/Home';
import { BrowserRouter, Route } from 'react-router-dom';
//import { HashRouter } from 'react-router-dom';
import './App.css';
import About from "./routes/About";
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

class App3 extends React.Component{
  // HashRouter 가 /# 을 입력하는 것을 의미함.
  // /about 을 하면 home을 렌더링하고 그 끝에 about을 렌더링하는 현상을 막아줘야 한다.
  render() {
    return (
      <BrowserRouter>
          <Navigation />
          <Route path="/" exact={true} component={Home} /> 
          <Route path="/about" component={About} /> 
          <Route path="/movie-detail" component={Detail} /> 
      </BrowserRouter>
    )
  }
}
  
export default App3;
