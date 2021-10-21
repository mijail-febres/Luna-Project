import React from 'react';
import NavigationSubheaderContainer from './NavigationSubheaderStyled'
import { useState } from 'react';

const NavigationSubheader = (props) => {

    const[borders,setborders] = useState([true, false, false])
    const labels = ['RESTAURANTS', 'REVIEWS', 'USERS'];

    const handleClick = (event) =>{
        const index=event.target.attributes.tabkey.value;
        let new_borders = [false, false, false];
        new_borders[index] = true;
        setborders([...new_borders])
        props.onClick(event.target.attributes.tabkey.value);
    }

    return (
        <NavigationSubheaderContainer>
            <div id='navigator'>
                {labels.map((label,index) => {
                    return(
                        <div 
                            key={index}
                            tabkey={index}
                            className='label'
                            onClick = {(event) => handleClick(event)}
                            style = {{borderBottom: borders[index]?'3px solid #E47D31':'none'}}
                        >
                            {label}
                        </div>
                    )
                })}
            </div>
        </NavigationSubheaderContainer>
    )
}

export default NavigationSubheader;