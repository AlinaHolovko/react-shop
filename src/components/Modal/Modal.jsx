import PropTypes from 'prop-types';

import "./Modal.scss";

// class Modal extends Component {
//   render() {
//     const { onClick, backgroundColor, text, header, actions } = this.props;

//     return (
//       <>
//         <div className="modal" onClick={onClick}>
//           <div
//             className="modal-block"
//             style={{ backgroundColor: backgroundColor }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="modal-header">{header}</div>
//             <p className="modal-text">{text}</p>
//             {actions}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

function Modal({ onClick, backgroundColor, text, header, actions }) {

    return (
      <>
        <div className="modal" onClick={onClick}>
          <div
            className="modal-block"
            style={{ backgroundColor: backgroundColor }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">{header}</div>
            <p className="modal-text">{text}</p>
            {actions}
          </div>
        </div>
      </>
    );
}

Modal.propTypes = {
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string
}

export default Modal;
