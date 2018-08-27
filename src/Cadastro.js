import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { cadastrar } from './actions/AuthActions';

export class Cadastro extends Component {

  static navigationOptions = {
    title:'Cadastro',
    headerStyle:{
      backgroundColor: '#FFFF00'
    },
    headerTintColor:'#000000'
  }

  constructor(props){
    super(props);
    this.state = {

    };


  }

  render() {

    return(
      <View style={styles.container}>
        <Text>E-mail</Text>
        <TextInput style={styles.input} value={this.props.email} />
        <Text>Senha</Text>
        <TextInput style={styles.input} value={this.props.senha} />

        <Button title="Cadastrar" onPress={()=>{ this.props.cadastrar(this.props.email, this.props.senha) }} />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container:{
    margin:10
  },
  input:{
    height: 40,
    backgroundColor: '#CCCCCC',
    padding: 5,
    marginBottom: 10
  }
});

const mapStateToProps = (state) => {
  return {
    email:state.auth.email,
    senha:state.auth.senha
  };
};

const CadastroConnect = connect(mapStateToProps, { cadastrar })(Cadastro);
export default CadastroConnect;
