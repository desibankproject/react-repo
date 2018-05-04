

import React, { Component } from 'react';

/**
 *  This is the way to create componet in React.js
 *  JSX = JavaScript XML
 *  Using this we can create JavaScript component with the help
 * of HTML contents
 */
 class Header extends Component {

    render() {
        //We are readinf
        let color=this.props.color;
        console.log("color = "+color);
        var mheight="30px";
        const hstyle={
               height:mheight,
               color:"white",
               backgroundColor:color 
             }
          return(
            <div>
                <header style={hstyle}>
                    <h1>{this.props.title}</h1>
                </header> 
            </div>
        ); 
   }
}

export default Header;