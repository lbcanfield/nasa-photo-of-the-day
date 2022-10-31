import React from 'react';

const BuildPage = (props) =>
{
    console.log( props );
    
    return (
        <section className='contentWrapper'>
            <div className='contentText'>
                <h2>{props.data.title}</h2>
                <p>{props.data.explanation}</p>
            </div>
            <div className='contentImg'>
                <img src={props.data.hdurl}></img>
            </div>
        </section>
    );
}

export default BuildPage;