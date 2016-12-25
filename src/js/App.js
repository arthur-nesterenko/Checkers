'use strict';

import React                from 'react';
import Board                from './components/Board';
//  import Header               from './components/Header';
// import Footer               from './components/Footer';



export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

  
    renderChildren() {
        return React.cloneElement(this.props.children, {
            params: this.state,
        });
    }

    render() {
        return(
                 <div>
                 <h1>   Wellcome, this sheckers by me  ! </h1>
                 <Board/>
                 </div>
                 
        )
}

}

if (!Array.prototype.chunk) {

Array.prototype.chunk = function(n){
    
    return  Array(Math.ceil(this.length/n)).fill().map((_,i) => this.slice(i*n,i*n+n));
}

}
