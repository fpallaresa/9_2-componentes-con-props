import "./App.css";
import CustomButtonComponent from "./components/CustomButton/CustomButton";
import MessageComponent from "./components/Messsage/Message";
import PhonesComponent from "./components/Phones/Phones";

const showAlert = (text) => {
  text === "Dale!" ? alert("Le has dado") : alert("Pues ok tio...");
};

function App() {
  return (
    <div className="main">
      <h2>Teléfonos:</h2>
      <PhonesComponent></PhonesComponent>

      <h2>Mensajes:</h2>
      <MessageComponent name="Laura"></MessageComponent>
      <MessageComponent name="Edu"></MessageComponent>

      <h2>Botones:</h2>
      <CustomButtonComponent text="Dale!" handleClick={() => showAlert("Dale!")}></CustomButtonComponent>
      <CustomButtonComponent text="Ok" handleClick={() => showAlert("Ok")}></CustomButtonComponent>
    </div>
  );
}

export default App;
