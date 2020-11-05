import styled from 'styled-components';


export const ContainerUser = styled.div`

        background: #FFF;
        border-radius: 5px;
        width:100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;
        margin-bottom: 20px;

       

        &:hover{
            transform: translateX(10px)
        }

        & + a {
            margin-top: 16px
        }


        img{
            width:64px;
            height:64px;
            border-radius: 50%;
        }

        div{
            margin: 0 16px;
            flex:1;


            strong{
                font-size: 20px;
                color: #3D3D4D;
            }

            p small {
                color: #3D3D4D;
            }

            a{
                display:block;
                font-size:18px;
                color: #A8A8B3;
                margin-top:4px;
            }
        }

        button{
            border: none;
            background: transparent;
        }

        svg{
            margin-left: auto;
            color: #CBCBD6
        }




  
`

