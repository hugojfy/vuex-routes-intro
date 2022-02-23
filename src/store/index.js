import { createStore } from 'vuex'

export default createStore({
  state: {
    userData:{
      name:'',
      email:'',
    }
  },
  mutations: {
    signout(state){
      state.userData={
        name:'',
        email:''
      }
    },
    signup(state, newUserData){
      state.userData={
        name:newUserData.name,
        email:newUserData.email
      }
    }
  },
  actions: {
    signoutAction(context){
      context.commit('signout');
    },
    signupAction(context, newUserData){
      console.log(newUserData);
      context.commit('signup',newUserData);
    }
  },
  modules: {
  },
  getters:{
      userData(state){
        return state.userData;
      },
      activedAccount(state){
        if(state.userData.name.trim()!==''&&state.userData.email.trim()!==''){
          return true;
        }else{
          return false;
        }
      }
  }
})
