import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Components/Home';
import Sobre from './Components/Sobre';

export default function Routes(){
return(

  <BrowserRouter>
  <Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/Sobre" component={Sobre}/>
  </Switch>
  </BrowserRouter>
  ); 
}