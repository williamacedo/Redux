const initalState = {
  email:'',
  senha:''
};

const AuthRedurcer = (state = [], action) => {
  if(state.length == 0){
    return initalState;
  }

  if(action.type == 'editEmail') {
    return { ...state, email:action.payload.email };
  }

  if(action.type == 'editSenha') {
    return { ...state, senha:action.payload.senha};
  }

  if(action.type == 'cadastroSucesso') {
    alert('Cadastro com sucesso');
    return state;
  }

  if(action.type == 'cadastroErro') {
    alert('Erro: '+action.payload.code);
    return state;
  }




  return state;
};

export default AuthRedurcer;
