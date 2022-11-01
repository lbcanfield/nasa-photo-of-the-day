import React from 'react';
import styled from 'styled-components';


const StyledContent = styled.section
`   display: flex;
    align-items: center;
`;

const StyledDiv = styled.div 
`   padding: 25px;
`;

const StyledImg = styled.img 
`   max-width: 100%;
`;
//.contentWrapper img
//{
//  max-width: 100%;
//}

const BuildPage = (props) =>
{
    // console.log( props );
    
    return (
        <StyledContent className='contentWrapper'>
            <StyledDiv className='contentText'>
                <h2>{props.data.title}</h2>
                <p>{props.data.date}</p>
                <p>{props.data.explanation}</p>
            </StyledDiv>
            <StyledDiv className='contentImg'>
                <StyledImg src={props.data.hdurl}></StyledImg>
            </StyledDiv>
        </StyledContent>
    );
}

export default BuildPage;