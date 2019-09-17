import React from "react";
import MyButton from "../MyButton";

class Contador extends React.Component {
  state = {
    valor: 0
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.valor <= 10;
  }

  incrementar = () => {
    this.setState(
      {
        valor: this.state.valor + 1
      },
      () => {
        console.log(this.state.valor);
      }
    );
  };

  render() {
    return (
      <>
        <h1>Contador {this.state.valor}</h1>
        <MyButton eventClick={this.incrementar}>Incrementar</MyButton>
      </>
    );
  }
}

export default Contador;
