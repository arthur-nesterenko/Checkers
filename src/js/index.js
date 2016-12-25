'use strict';

import React     from 'react';
import ReactDOM  from 'react-dom';
import App    from './App';

require('./../styles/main.scss');

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

ReactDOM.render(<App/>, document.getElementById('app'));


