import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { editEmail, editSenha } from './actions/AuthActions';

export class Login extends Component {

  static navigationOptions = {
    title:'Login',
    headerStyle:{
      backgroundColor: '#FFFF00'
    },
    headerTintColor:'#000000'
  }

  constructor(props){
    super(props);
    this.state = {
    };

    this.entrar = this.entrar.bind(this);


  }

  entrar() {

  }

  render() {

    return(
      <View style={styles.container}>
        <Text>E-mail</Text>
        <TextInput style={styles.input} value={this.props.email} onChangeText={(txt)=>{this.props.editEmail(txt)}} />
        <Text>Senha</Text>
        <TextInput style={styles.input} value={this.props.senha} onChangeText={(txt)=>{this.props.editSenha(txt)}} />

        <Button title="Entrar" onPress={this.entrar} />
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

const LoginConnect = connect(mapStateToProps, { editEmail, editSenha })(Login);
export default LoginConnect;
