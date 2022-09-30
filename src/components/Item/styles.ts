import styled from "styled-components";

interface Props {
  isCompleted: boolean
  isDarkMode: boolean;
}

const Item = styled.div<Props>`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
  background-color: ${(props) => props.isDarkMode ? "var(--bg_lst_dark)" : "var(--bg_lst_light)"};

  .circle {
    width: 23px;
    height: 23px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: hsl(236, 9%, 61%);

    &:hover {
      background-image: linear-gradient(
        120deg,
        hsl(192, 100%, 67%),
        hsl(280, 87%, 65%)
      );
    }

    cursor: pointer;

    .checkIcon_background {
      width: 19px;
      height: 19px;
      border-radius: 50%;

      background-color: ${(props) =>
        props.isDarkMode ? "var(--bg_lst_dark)" : "var(--bg_lst_light)"};
    }
  }

  .rainbow {
    background-image: linear-gradient(
      120deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
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
