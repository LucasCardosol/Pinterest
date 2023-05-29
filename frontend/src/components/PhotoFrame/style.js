import styled from "styled-components";

export const PhotoFrameContainer = styled.section`
    padding-top: 10px;
    margin-bottom: 16px;
    .container {
        display: flex;
        width: 1016px;
        min-width: 1016px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
        border-radius: 32px;
        margin: 0 auto;
        .column1,.column2{
            position: relative;
            display: flex;
            flex-direction: column;
            width: 50%;
        }
        .column1{
            img{
                border-top-left-radius:32px;
                border-bottom-left-radius:32px;
                width: 100%;
                height: 100%;
                max-height: 100%;
                min-height: 472px;
                object-fit: cover;
            }
        }
        .backgrounStick{
            z-index: 9;
            position: -webkit-sticky;
            position: sticky;
            top:80px;
            margin-bottom: 97px;
            padding-right:24px;
            .subheader{
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: white;
                padding:32px 0 0 24px;
                div{
                    display: flex;
                }
                img{
                    width: auto;
                    height: auto;
                    transform: scale(0.032);
                }
                .circleButtons{
                    button{
                        :hover{
                            background: #F0F0F0;
                        }
                        :active{
                            background-color: #E4E4E4;
                        }
                    }
                } 
            }
        }
        .listComment{
            overflow-y:auto;
            h2{
                font-weight: 400;
                margin-bottom: 16px;
            }
            h1{
                margin-bottom: 12px;
            }
        }
        .circle{
            height: 48px;
            width: 48px;
            background-color: gray;
            border-radius: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 24px;
            font-weight: 500;
        }
        .userName{
            display: flex;
            align-items: center;
            gap: 8px;
            p{
                font-size: 14px;
                span{
                    font-weight: 500;
                }
            }
        }
        .comments{
            .commentUser{
                margin-bottom: 10px;
                display: flex;
                gap: 5px;
            }
            p{
                max-width: 402px;
            }
            .user{
                display: flex;
                text-transform: uppercase;
                height:30px ;
                width:30px ;
                border-radius: 15px;
                justify-content: center;
                align-items: center;
            }
            
        }
        .comment{
            background-color: transparent;
            position: sticky;
            bottom: 0;
            z-index: 3;
            border-top: #F0F0F0 solid 1px;
            border-bottom-right-radius: 32px;
            padding: 24px;
            padding-right: 36px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            background-color: white;
            input{
                background-color: transparent;
                flex: 1;
                max-width: 308px;
                
            }
            .divInput{
                background-color: #F0F0F0;
                border-radius: 24px;
                width: 388px;
                font-size: 16px;
                height: 100%;
                padding-left: 16px;
                display: flex;
                align-items: center;
                justify-content: left;
                gap: 19px;
                :hover{
                   background-color: #DADADA
                }
            }
            .sendButton{
                height:40px;
                width:40px;
                border-radius: 20px;
                background-color: #E60023;
                display: flex;
                justify-content: center;
                align-items: center;
                :hover{
                    cursor: pointer;
                    background-color: #AD081B;
                }
            }
        }
    }

`