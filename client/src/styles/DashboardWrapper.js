import styled from "styled-components";
const DashboardWrapper = styled.div`
  display: flex;
  fledirection: row;
  height: 100vh;
  .left {
    width: 15%;
    padding: 20px 0px 20px 20px;
    border-right: 1px solid #e6e6e6;
    height: 100%;
  }
  @media (max-width: 768px) {
    .left {
      visibility: hidden;
      width: 0px;
    }
  }
  .main-container {
    width: 100%;
    height: 100%;
    padding: 12px;
  }
  .dashboard-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 70%;
    li {
      padding: 10px;
      pointer: cursor;
    }
  }
  .logout {
    padding-left: 3rem;

    .img-logout {
      margin-right: 10px;
    }
    .link {
      text-decoration: none;
      color: #000;
    }
  }
  .projects-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  .todos {
    width: 28%;
    height: 100%;
    padding: 20px;
    background-color: #F5F9F9;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
  .todo-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    span {
      background: #ecf3f3;
      color: #329c89;
      border-radius: 7px;
      width: 20px;
      text-align: center;
      height: 20px;
    }
  }
  .add-todo-btn {
    background: #ecf3f3;
    text-align: center;
    border-radius: 7px;
    button {
      color: #329c89;
      border: none;
      padding: 5px;
      font-size: 30px;
      cursor: pointer;
    }
  }
  .todo-description {
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0px 0px 28px rgba(72, 174, 174, 0.07);
    border-radius: 7px;
    margin-top: 30px;
    h5,
    p,
    img {
      margin: 20px 0px 0px 18px;
    }
    img {
      margin-bottom: 15px;
    }
  }
  .form-inputs{
    width:95%;
    border:none;
    outline:none ;
    height:50px ;
    margin-bottom:20px;
    margin-left:10px;
    resize: none;
  }
  .add-todo{
    width:100%;
    text-align:left ;
    padding-left:10px ;
    button{
        width:20% ;
        background: #ecf3f3;
        text-align: center;
        border-radius: 7px;
        padding: 5px;
        font-size: 15px;
        cursor: pointer;
        border:none ;
        color: #329c89;
        margin-bottom:10px ;
    }
  }
  .user-image {
    width: 25px;
    height: 25px;
  }
`;
export default DashboardWrapper;
