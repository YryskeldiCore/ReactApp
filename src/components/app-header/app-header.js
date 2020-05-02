import React from 'react';
import './app-header.css';
// import styled from 'styled-components';

// const Header = styled.div`
//     display: flex;
//     align-items: flex-end;
//     justify-content: space-between;
//     h1 {
//         font-size: 30px;
//         color: ${props=>props.colored ? 'pink' : 'black'};
//         :hover {
//             color: red;
//         }
//     }
//     h2 {
//         font-size: 1.2rem;
//         color: pink;
//     }
// `

const AppHeader = ({liked,allPosts}) => {
    return(
        <div className="app-header d-flex">
            <h1>Yryskeldi Amanturov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>)
}

export default AppHeader;