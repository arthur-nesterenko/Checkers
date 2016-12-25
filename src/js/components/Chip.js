import React, {Component} from 'react'
import {removeClass} from '../utils/DOM';

class Chip extends React.Component {

    constructor( props )
    {
        super(props);

        this.state = 
        {
           posX : this.props.coordinates.x,
           posY : this.props.coordinates.y,
           active: false
        }
         this.clickByChip = this.clickByChip.bind(this);
    }


    shouldComponentUpdate(nextProps,nextState)
    {
            console.log('n',nextState );

            return true
    }

    componentWillUpdate(nextProps,nextState)
    {
            console.log('here');
    }
    
     clickByChip(e)
    {
        e.stopPropagation();
         removeClass('.chip','active');
        e.target.className +=' active';
            
    }

    render () {
        return (
            <div onClick={this.clickByChip}  className={ this.state.active ? 'chip active' : 'chip' } data-x={this.state.posX} data-y={this.state.posY}>
            </div>
        )
    }
}

export default Chip