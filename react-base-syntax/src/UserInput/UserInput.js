import React from 'react';

const userInput = (props) => {
    const style = {
        borderRadius: '4px',
        border: '1px solid blue',
        padding: '5px'    
    };

    return (
        <input style={style} type="text" onChange={props.change} value={props.username}/>
    );
};

export default userInput;