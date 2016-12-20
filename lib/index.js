import Application from './components/Application';
import React from 'react';
import { render } from 'react-dom';
import firebase from './firebase';
require('./style.scss');

render(<Application title='Shoot the Breeze' />, document.getElementById('application'));
