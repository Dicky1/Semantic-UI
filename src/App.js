import React, { Component } from 'react';
import {Button,Icon} from 'semantic-ui-react';
import './App.css';
import Header from './Components/Header';
import Inputan from './Components/inputan';
import Tabledata from './Components/tabledata';

const App = () => 
  <div>
    <Header/>
    <Inputan />
    <Tabledata />
    </div>

export default App;
