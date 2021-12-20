import styled from "styled-components";

interface IStyle {
  error?: string;
}

export const Container = styled.div<IStyle>`
  ${(props) => props.error && "border: 1px solid red;"}
`;
