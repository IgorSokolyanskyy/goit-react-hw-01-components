import PropTypes from 'prop-types';
import { getRandomBgColor } from 'utils';
import {
  Section,
  Title,
  Items,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <Items>
        {stats.map(({ label, percentage, id }) => (
          <Item style={{ backgroundColor: getRandomBgColor() }} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </Items>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
