import styled from '@emotion/styled';

export const List = styled.ul`
  width: 380px;
  margin-bottom: ${props => props.theme.spacing(4)}; ;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: ${props => props.theme.spacing(5)};
  box-shadow: 0 0 1em;
  padding-left: ${props => props.theme.spacing(2)};
  border-radius: 3px;
  padding: ${props => props.theme.spacing(2)};
`;

const setBgColor = ({ isOnline, theme }) => {
  return isOnline ? theme.colors.green : theme.colors.red;

  // switch (props.isOnline) {
  //   case true:
  //     return 'rgb(14, 207, 14)';
  //   case false:
  //     return 'rgb(176, 8, 8)';
  //   default:
  //     return '#000';
  // }
};

export const Chip = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 15px 0 15px;
  background-color: ${setBgColor};
`;

export const Img = styled.img`
  border-radius: ${props => props.theme.spacing(2)};
  margin: ${props => props.theme.spacing(2)};
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
