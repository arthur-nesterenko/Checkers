import React, {Component} from 'react';
import Cell from './Cell';

class Board extends React.Component {
    
    makeBoard()
    {
            const array=["A","B","C","D","E","F","G","H"];
            let i,j;
            let board = new Array();
            
            for ( i = 8; i > 0; i-- )
            {
                   for( j = 0; j < 8; j++)
                   {
                        let info = {}
                        if((i%2==0 && j%2==0) || (i%2!=0 && j%2!=0))
                        {
                             info = 
                             {
                                 classes: 'white',
                                 name : `${array[j]}${i}`,
                                 x : j,
                                 y: i

                             }
                        }
                        else
                        {
                          info = 
                             {
                                 classes: 'black',
                                 name : `${array[j]}${i}`,
                                  x : j,
                                  y: i

                             }
                          
                        }
                           board.push( <Cell data ={info} /> )
                   } 
        
            }



     return  board.chunk(8).map( (cell,i )  => ( <tr key={i}> {cell} </tr> ) );
           

    }
    
    
    render() {
        return (
               <div className="flex-middle">
                <table className='board'>
                    <tbody>
                        {this.makeBoard()}
                    </tbody>
                </table>
               </div>
        );
    }
}

export default Board;

