import styled from "styled-components";

export const PhotoContainer = styled.div`
    position: relative;
    display: flex;
    :hover{
        a,.salvar{
            display: block;
        }
        .bottomButtons{
            display: flex;
        }
    }
    .salvar{
        display: none;
        position: absolute;
        z-index: 4;
        margin: 8px;
        right: 0;
        
    }
    a{
        cursor: zoom-in;
        position: absolute;
        display: block;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        background-color: rgba(0,0,0,0.3);
        display: none;
        z-index: 3;
    }
    img{
        width: 100%;
        height: 100% ;
        min-height: 236px;
        object-fit: cover;
        border-radius: 16px;
       
    }
    .bottomButtons{
        display: none;
        position: absolute;
        justify-content: center;
        gap: 8px;
        width:80px;
        bottom: 0;
        right: 0;
        margin: 8px;
        z-index: 4;
        img{
            width: auto;
            height: auto;
            transform:scale(0.025);
        }
        button{
            background-color: rgba(255,255,255,0.7);
            height: 32px;
            width: 32px;
            border-radius: 16px;
            :hover{
                background-color: rgba(255,255,255,0.85);
            }
        }
    }
    
`