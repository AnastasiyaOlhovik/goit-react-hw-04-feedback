import PropTypes from 'prop-types';
import styles from './ButtonReset.module.css';

const Button = ({ title, onClickReset }) => {

    return (
        <button
            type="button"
            className={styles.btn}
            onClick={onClickReset}
        >{title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClickReset: PropTypes.func.isRequired,
};

export default Button;