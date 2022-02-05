import React, { Component } from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity
} from "react-native";

export default class App extends Component{

  constructor (props) {
    super(props),
    this.state = {
      numero: 0,
      botao: "VAI",
      ultimo: null
    }

    this.timer = null; // Variavel do timer do relogio
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){

    if (this.timer != null) {
    
      clearInterval(this.timer);
      this.timer = null
      this.setState({botao: "VAI"});

    } else {

      this.timer = setInterval( () => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100)  

      this.setState({botao: "PARAR"})
    }

  }

  limpar(){

    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null  
    } 

    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: "VAI"
    })
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Image 
          source={require("./src/cronometro.png")}
          style={styles.img}
        />
        
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.botao} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltimo}>
          <Text style={styles.textoCorrida}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + "s" : ''}
          </Text>
        </View>

      </View>
    );
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00aeef"
  },

  timer: {
    marginTop: -160,
    color: "#fff",
    fontSize: 65,
    fontWeight: "bold"
  },

  btnArea:{
    flexDirection: "row",
    marginTop: 80,
    height: 45
  },

  botao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#fff",
    height: 45,
    margin: 18,
    borderRadius: 10
  },

  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef"
  },

  areaUltimo: {
    marginTop: 40
  },

  textoCorrida: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#fff",
    textAlign: "center"
  }

})