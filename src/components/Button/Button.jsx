import PropTypes from "prop-types";

import "./Button.scss";

function Button({ backgroundColor, text, onClick }) {
  
  return (
    <button
      className="button"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
