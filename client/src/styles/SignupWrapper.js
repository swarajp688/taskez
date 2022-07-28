import styled from "styled-components";
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;

  margin-left: 50px;
  margin-top: 30px;
  box-sizing: border-box;
  padding-top: 40px;
  border-top: 2px solid rgba(64, 145, 223, 0.12);
  div{
    margin-bottom: 20px;
  }
  h4 {
    color: #1a3b58;
    font-weight: 500;
    font-size: 21px;
    line-height: 101.1%;
  }
  p {
    color: #999999;
  }
  h4,
  p {
    margin: 0;
  }
    .login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
        background-color: #f5f5f5;
        input {
            
            height: 50px;
            border: 1px solid #e6e6e6;
            border-radius: 4px;
            padding: 0 20px;
            font-size: 16px;
            font-weight: 400;
            color: #1a3b58;
            background-color: #ffffff;
            border: 1px solid #CBDBEA;
            margin-top: 10px;
            margin-bottom: 20px;
            border-radius: 8px;
            &:focus {
                outline: none;
                border: 1px solid #CBDBEA;
            }
        }
        button {
            background: #329C89;
            border-radius: 8px;
            border: none;
            color: #ffffff;
            font-size: 16px;
            font-weight: 500;
            padding: 10px 20px;
            margin-top: 20px;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

export default LoginWrapper;
