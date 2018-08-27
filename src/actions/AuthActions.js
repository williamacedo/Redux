import firebase from '../FirebaseConnection';

export const editEmail = (email) => {
  return {
    type:'editEmail',
    payload:{
      email:email
    }
  };
};

export const editSenha = (senha) => {
  return {
      type:'editSenha',
      payload:{
        senha:senha
      }
  };
};

export const cadastrar = (email, senha) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((user)=>{
      dispatch({
        type:'cadastroSucesso'
      });
    })
    .catch((error)=>{
      dispatch({
        type:'cadastroErro',
        payload:{
          code:error.code
        }
      });
    });
  }
};
