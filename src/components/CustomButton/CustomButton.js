import "./CustomButton.css";

function CustomButtonComponent(prop) {
    return (
        <div className="container">
            <button onClick={prop.handleClick} className="container__button">
            {prop.text}
            </button>
        </div>
    );
}

export default CustomButtonComponent;
