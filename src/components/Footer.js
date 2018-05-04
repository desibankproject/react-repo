

import React, { Component } from 'react';

/**
 *  This is the way to create componet in React.js
 *  JSX = JavaScript XML
 *  Using this we can create JavaScript component with the help
 * of HTML contents
 */
 class Footer extends Component {

    render() {
        const hstyle={
               height:"30px",
               backgroundColor:"pink"  
        }
          return(
            <div>
                <header style={hstyle}>
                    <h3>@Copyright Synergisticit 2018!!!!!!!!!!!!!!!!!!!!!!</h3>
                </header> 
            </div>
        ); 
   }
}

export default Footer;