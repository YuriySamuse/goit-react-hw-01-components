// import css from 'components/statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import {
  StatisticSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from 'components/statistics/Statistics.style';

function Statistics({ title, stats }) {
  // console.log(stats);
  return (
    <StatisticSection>
      <Title>{title}</Title>

      <StatList>
        {stats.map(stat => (
          <Item key={stat.id}>
            <Label>.{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
