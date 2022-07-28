import styled from "styled-components";
const HomeWrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 100px;
  }
  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 500px;
    height: 500px;
  }
  .home-image {
    width: 100%;
    height: 100%;
  }
  .auth-container {
    width: 50%;
    height:500px;
    border: 2px solid rgba(26, 59, 88, 0.24);
    border-radius: 65px;
    padding: 90px 60px;
    .title-container {
      width: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    .title {
        font-size: 30px;
        font-weight: bold;
        color: #1A3B58;
        margin-left: 20px;
        cursor: pointer;
        padding-bottom: 10px;
    }

  }
  .border{
    border-bottom: 2px solid rgba(26, 59, 88, 0.24);
  }
`;

export default HomeWrapper;
