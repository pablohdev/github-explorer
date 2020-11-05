import styled from 'styled-components';

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

        a{
            color: #FF0000;
        }

        svg{
            margin-right:4px;
        }
    }
`;

export const Users = styled.div`

    margin-top:80px;
    max-width: 700px;
    
    
`


export const Title = styled.h1`
   
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
   
`;
