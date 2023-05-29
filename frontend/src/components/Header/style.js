import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 10;
    height: 80px;
    width: 100%;
    top: 0;
    left: 0;
    background-color: white;
    
    .container{
        display: flex;
        justify-content: start;
        align-items: center;
        height: calc(100% - 16px);
        padding: 8px 16px;
        nav,ul{
            width: 100%;
        }
        nav,ul , li , a {
            display: block;
            height: 48px;
        }
        button{
            height: 48px;
        }
        ul{
            display: flex;
        }
        .iconButton{
            width: 48px;
            min-width: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 24px;
            :hover{
                background-color: rgba(0,0,0,0.1);
                font-size: 16px;
            }
            
            svg{
                transform-origin: center;
                width: 24px;
                height: 24px;
                fill:#5F5F5F
            }
        }
        .logo{
            :active{
                transition: 0.2s;
                background-color: rgba(0,0,0,0.15);
                transform: scale(0.9,0.9);
            }
            svg{
                fill:#E60023 ;
            }
            
        }
        .circle{
            height: 24px;
            width: 24px;
            background-color: black;
            border-radius: 12px;
            
        }
        .arrowPopMenu{
            padding: 0 !important;
            height: 24px !important;
            width: 24px !important;
            min-width: auto;
            margin-top: 12px;
        }
    }
`