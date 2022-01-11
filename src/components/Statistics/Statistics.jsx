import PropTypes from 'prop-types';
import { Container, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Container>
            <Item>{`Good: ${good}`}</Item>
            <Item>{`Neutral: ${neutral}`}</Item>
            <Item>{`Bad: ${bad}`}</Item>
            <Item>{`Total: ${total}`}</Item>
            <Item>
                {`Positive feedback: ${!good ? 0 : positivePercentage} %`}
            </Item>
        </Container>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
