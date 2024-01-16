import "./Message.css";

const MessageComponent = (props) => {
    return <p className="messsage">Hola {props.name}!</p>;
};

export default MessageComponent;
