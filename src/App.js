import React, {Component} from "react";
import './estilo.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      txtFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Ouve o que você ta falando!',
      'Quando uma pessoa diz pra você acreditar em você e você acredita, você não está acreditando em você. Você está acreditando na pessoa que acredita em você.',
      'A vida é a arte do encontro, embora haja tanto desencontro pela vida.',
      'Com as lágrimas do tempo e a cal do meu dia eu fiz o cimento da minha poesia.',
      'Nada grita mais alto do que o silêncio',
      'Tem amores da vida que não são pra vida'
    ]
  }

  quebraBiscoito(){
    let state = this.state;
    let numAleatorio = Math.floor(Math.random() * this.frases.length)

    state.txtFrase = '"' + this.frases[numAleatorio] + '"';
    this.setState(state);
    
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.txtFrase}</h3>
      </div>
    )
  }

}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
