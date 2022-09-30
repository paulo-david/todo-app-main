import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .circle {
    width: 23px;
    height: 23px;
    border-radius: 50%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-image: linear-gradient(
      120deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );

    cursor: pointer;

    .checkIcon_background {
      width: 18px;
      height: 18px;
      border-radius: 50%;

      
      /* background-color: list_background; */
    }
  }
  
  .task_description {
    width: 60%;
  }
  
  .delete_btn {
    fill: white;
    cursor: pointer;
  }

  /* mobile config */
`;

export default Item;
