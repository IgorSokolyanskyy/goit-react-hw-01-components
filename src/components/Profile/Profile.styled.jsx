import styled from '@emotion/styled';

export const Bord = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  padding-top: 15px;
  box-shadow: 0 0 15px #131515ed;
  border-radius: 10px;
  margin-bottom: ${props => props.theme.spacing(6)};
  background-color: ${props => `${props.theme.colors.white}`};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Img = styled.img`
  width: 250px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: ${props => `${props.theme.colors.white}`};
  padding: 20px 10px 0px 10px;
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Name = styled.p`
  margin-bottom: ${props => props.theme.spacing(2)};
  font-weight: 700;
  font-size: 30px;
  color: ${props => `${props.theme.colors.black}`};
`;

export const Tag = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: ${props => `${props.theme.colors.black}`};
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Location = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: ${props => `${props.theme.colors.black}`};
  margin-bottom: ${props => props.theme.spacing(2)};
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  width: inherit;
  background-color: ${props => `${props.theme.colors.grey}`};
  border-top: 2px solid rgb(213, 213, 213);
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  padding: 15px 0;
  border-right: 2px solid rgb(213, 213, 213);
  &:ast-child {
    border: none;
  }
`;

export const Label = styled.span`
  margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #524a4d8b;
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Quantity = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: #524a4d;
`;
