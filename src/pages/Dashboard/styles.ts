import styled from 'styled-components';
import { shade } from 'polished';


export const Header = styled.header`

    display:flex;
    align-items:center;
    justify-content:space-between;

    a{
        display: flex;
        align-items:center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover{
            color: #666
        }

        svg{
            margin-right:4px;
        }
    }
`;

export const Title = styled.h1`
   
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
   
`;

export const Form = styled.div`

    margin-top: 40px;
    max-width: 700px;

    display: flex;


    input{
        flex:1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3A3A3A;
        border: 2px solid #FFF;
        border-right:0;
        
        &::placeholder{
            color:#A8A8B3;
        }
    }

    button{
        width:210px;
        height: 70px;
        background: #04D361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#04D361')}
        }
    }


`


export const Users = styled.div`

    margin-top:80px;
    max-width: 700px;
    
    
`


export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top:8px
`
