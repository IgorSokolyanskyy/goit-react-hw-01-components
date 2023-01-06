import styled from '@emotion/styled';

export const Section = styled.section`
  width: 340px;
  margin: auto;
  border: solid 1px rgb(211, 221, 221);
  margin-bottom: ${props => props.theme.spacing(4)};
  border-radius: 5px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 16p;
  color: #333333;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Items = styled.ul`
  display: flex;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 75px;
  height: 60px;
  color: rgb(255, 255, 255);
`;

export const Label = styled.span`
  margin-top: ${props => props.theme.spacing(1)};
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Percentage = styled.span`
  font-size: 20px;
`;
