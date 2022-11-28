// import css from 'components/statistics/Statistics.module.css';
import PropTypes from 'prop-types';
import {
  StatisticSection,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from 'components/Statistics/Statistics.style';

function Statistics({ title, stats }) {
  // console.log(stats);
  return (
    <StatisticSection>
      {title && <Title>{title}</Title>}
      {/* <Title>{title}</Title> */}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>.{label}</Label>
            <Percentage>{percentage}%</Percentage>
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
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
