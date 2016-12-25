import React, {Component} from 'react'

import Chip               from './Chip';


class Cell extends React.Component {
    
    constructor(props)
    {
        super( props );

     this.state = 
     {
         classes:      this.props.data.classes,
         name :      this.props.data.name,
         posX :        this.props.data.x,
         posY :        this.props.data.y,
         isEmpty :   true,
     }

         this.clickByCell = this.clickByCell.bind(this);
    }


    clickByCell(e)
    {

        if(  e.target.className !== 'white')
        {
                console.log('cellStaet', this )
        }
            
    }


    // initChip( color )
    // {
    //     if( color !== 'black')
    //     return;

    //     else 
    //     return
    //     (
          
    //     )


    // }
    
    render () {


        if(this.state.classes === 'black' && ( this.state.posY <= 3 || this.state.posY > 5) )
        {
            let coordinates =  {
                posX : this.state.posX,
                posY : this.state.posY
            }

        return (
              <td className={this.state.classes}  onClick={this.clickByCell} data-ned={this.state.posX }>
                <Chip coordinates = {coordinates} />
            </td>
        )
        }
       else 
        return(
             <td className={this.state.classes} >
             </td>
        ) 

    }
}

export default Cell

