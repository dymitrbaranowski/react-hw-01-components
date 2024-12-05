import PropTypes from 'prop-types';
import {
  Container,
  Label,
  Percentage,
  StatList,
  StatListItem,
  Title,
} from './Statistic.styled';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Statistics = ({ title, stats }) => (
  <Container>
    <section>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatListItem
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatListItem>
        ))}
      </StatList>
    </section>
  </Container>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
