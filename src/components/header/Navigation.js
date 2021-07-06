import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';

const Navigation = () =>{
    return(
        <div>
            <Navbar dark color="dark">
                <div classsName ="container">
                    <NavbarBrand href="/">
                        Shihab's Restaurant
                    </NavbarBrand>
                </div>
            </Navbar>
    
        </div>
        )
}

export default Navigation;