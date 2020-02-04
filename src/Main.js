import React from 'react';
function Main(props) {
    console.log(props.content)
    return (
        <div>
            <p>{props.content}</p>
        </div>




    )
}

export default Main;