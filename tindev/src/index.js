import React from 'react';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket', 'Remote debugger']);

import Routes from './routes';

export default function App() {
  return <Routes />;
}
