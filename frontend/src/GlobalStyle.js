import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    
    body{
        padding: 0;
        margin: 0;
        padding-top: 80px;
        width: 100%;
        overflow-x: none;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: 0.15s;
        :active{
            transform: scale(0.9)

        }
    }
    .normalButton{
        padding: 0 16px;
        border-radius: 24px;
        height: 40px;
        font-weight: 600; 
        background-color: #F0F0F0;
        :hover{
            background-color: #E2E2E2
        }
    }
    .salvar{
        background-color: #E60023;
        :hover{
           background-color: #AD081B
        }
        p{
            color: white;
        }
    }
    input,button{
        outline: none;
        border: none;
    }
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    p,h2,h1{
        font-family: BlinkMacSystemFont, -apple-system,'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #111111;
        margin: 0;
    }
    h1{
        font-size: 28px;
        font-weight: 600;
    }
    h2{
        font-size:20px;
        font-weight: 600;
    }
    p{
        font-size: 16px;
    }
    .none{
        display: none;
    }
    .fontButton{
        font-weight:600 ;
    }
    .arrow{
        height: 24px;
        width: 24px;
        transform: scale(0.5,0.5);
    }
    
    .navButton{
        padding: 0 16px;
        border-radius:24px;
        display: flex !important;
        justify-content: center;
        align-items: center;
        svg{
            margin-left: 2px;
        }
    }
    .circleButton{
        height: 48px;
        width: 48px;
        border-radius:24px;
        display: flex !important;
        justify-content: center;
        align-items: center;
    }
    .active{
        background-color: #111111;
        p{
            color: white !important;
        }
        svg{
            fill: white;
        }
    }
    .popHoverContent{
        z-index: 11;
        background-color: white;
        border-radius: 16px;
        box-shadow: 0 0 8px rgb(0 0 0 / 10%);
        div{
            padding: 8px;
        }
        a{
            display: block;
            padding: 8px;
            height: 21px;
            border-radius: 8px;
            :hover{
                background-color: rgba(0,0,0,0.1);
            }
        }
    }
    
    .criar{
        height: 90px;
        width: 180px;
    }
    .blackActive{
        svg{
            fill: black !important;
        }
    }
    .HoverContent{
        
        
    }
`;
 
export default GlobalStyle;
