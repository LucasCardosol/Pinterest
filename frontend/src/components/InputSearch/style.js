import styled from "styled-components";

export const InputSearchStyle = styled.div`
    height: 48px;
    margin: 0 8px;
    .inputContainer{
        display: flex;
        align-items: center;
        padding-left: 16px;
        background-color: #E1E1E1;
        border-radius: 32px;
        height: 100%;
    }
    input{
        height: 100%;
        width: 100%;
        background-color: transparent;
        font-size: 16px;
    }
    .inputFocus{
        outline: 4px solid #489AF3;
    }
    .searchIcon{
        transform-origin: center;
        fill:#5F5F5F;
        height: 16px;
        width: 16px;
        min-width: 16px;
        margin-right: 8px;
        path{
            transform: scale(0.6666);
        }
    }
    .iconButton{
        :hover{
            background-color: rgba(0,0,0,0.05);
        }
    }
    .popHoverContentInput{
        width: 95%;
        height: 80vh;
        padding-top: 30px;
        background-color: white;
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;
        z-index: 11;
    }
    
`