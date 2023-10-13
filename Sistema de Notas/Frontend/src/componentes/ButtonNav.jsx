import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const ButtonNav = ({ruta, texto, styles}) => {
    return (
    <Link to={ruta}>
      <button className={styles} type="button">
        {texto}
      </button>
    </Link>
    )
}

ButtonNav.propTypes = {
    ruta: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
}

export default ButtonNav