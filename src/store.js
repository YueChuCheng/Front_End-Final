import Vue from 'vue'
import Vuex from 'vuex'
import { firebase } from '@firebase/app';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order: [
    ],
    totalPrice: 0,
    login: { //儲存firestore資料
      email: "",
      password: "",
      errors: [],
      loading: false,
      user: ""
    },
  },
  mutations: {

  },
  actions: {
    async loginWithGoogle() {
      //self=this 可用此方法於firebase函式中取得state變數
      
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      
      var res = await firebase.auth().signInWithPopup(provider).then(async function (result) { //以非同步函示才能取得接收值
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        //var user = result.user;
        // ...
        let user = firebase.auth().currentUser.uid;//取得使用者uid
        let doc = await firebase.firestore().collection("user").doc(user).get()


        if (doc.data().registerBool == "true") { //若曾經註冊
         
          return 'login';
        }
        else {//若未註冊
          alert("需註冊才能使用店家功能!");
          return 'register';
        }

      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

      return res//回傳跳哪一頁的值
    }
  }
})
