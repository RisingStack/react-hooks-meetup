import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import './index.css';
import NameContext from './Context/Context';
import PropClass from './Prop/Class';
import PropFunc from './Prop/Function';
import StateClass from './State/Class';
import StateFunc from './State/Function';
import ContextClass from './Context/Class';
import ContextFunc from './Context/Function';
import LifecycleClass from './Lifecycle/Class';
import LifecycleFunc from './Lifecycle/Function';
import CustomHook from './CustomHooks/Function';


ReactDOM.render(
  <BrowserRouter>
    <NameContext.Provider value="Bela">
      <nav>
        <ul>
          <li><Link to="/propClass">Prop Class</Link></li>
          <li><Link to="/propFunc">Prop Func</Link></li>
          <li><Link to="/stateClass">State Class</Link></li>
          <li><Link to="/stateFunc">State Func</Link></li>
          <li><Link to="/contextClass">Context Class</Link></li>
          <li><Link to="/contextFunc">Context Func</Link></li>
          <li><Link to="/lifecycleClass">Lifecycle Class</Link></li>
          <li><Link to="/lifecycleFunc">Lifecycle Func</Link></li>
          <li><Link to="/customHook">Custom Hook</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/propClass" component={() => <PropClass name="John" />} />
        <Route exact path="/propFunc" component={() => <PropFunc name="John" />} />
        <Route exact path="/stateClass" component={() => <StateClass name="John" />} />
        <Route exact path="/stateFunc" component={() => <StateFunc name="John" />} />
        <Route exact path="/contextClass" component={ContextClass} />
        <Route exact path="/contextFunc" component={ContextFunc} />
        <Route exact path="/lifecycleClass" component={() => <LifecycleClass name="John" />} />
        <Route exact path="/lifecycleFunc" component={() => <LifecycleFunc name="John" />} />
        <Route exact path="/customHook" component={() => <CustomHook name="John" />} />
      </Switch>
    </NameContext.Provider>
  </BrowserRouter>
, document.getElementById('root'));
