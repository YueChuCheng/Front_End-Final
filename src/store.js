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
    registerBool: false//是否在登入狀態
    , user: {//儲存註冊資訊
      username: '',//儲存登入後用戶名稱
      userid: '' //儲存登入後的用戶ID

    },
    clickID:''//點擊的店家id
    ,
    storeData: {
      storeID: [], //儲存店家ID
      storeInfo:[]//儲存店家資訊
    }
  },
  getters: {
    registerBool: state => state.registerBool
  },

  mutations: {

  },
  actions: {
    async loginWithGoogle() { //google登入函式
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

      var res = await firebase.auth().signInWithPopup(provider).then(async function (result) { //以非同步函示才能取得接收值
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        //var user = result.user;
        // ...
        let user = firebase.auth().currentUser.uid;//取得使用者uid
        let doc = await firebase.firestore().collection("test").doc(user).get()
  
        console.log(doc.data());
        if (doc.data()) { //若曾經註冊//改了
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
    },
    async readUser() { //登入時讀取User資料
      var user = firebase.auth().currentUser.uid;
      let docRef = await firebase.firestore().collection("test").doc(user)
      try {
        let doc = await docRef.get();
        this.state.user.userid = user; //填入User uid
        this.state.user.username = doc.data().Name;//填入User Name
        this.state.registerBool = true;//若登入則設為true        

      }
      catch (error) {
        console.log("提取文件時出錯:", error);
      }
    },

    async doStoreDataRead() {//讀取首頁資訊
      let docRefStoreID = await firebase.firestore().collection("test")
      try {
        let docStoreID = await docRefStoreID.get();
        

        this.state.storeData.storeID=docStoreID.docs;//取所有店家ID
        
        this.state.storeData.storeInfo=[]; //先清空儲存空間
       // console.log("第一間店家ID= "+this.state.storeData.storeID[1].id)//取某間店家ID

        //this.state.storeData.storeInfo=docStoreID.docs
      
        for (let index = 0; index <docStoreID.docs.length; index++) {
          
          this.state.storeData.storeInfo.push(docStoreID.docs[index].data());//取店家資訊陣列
        }
        //console.log( this.state.storeData.storeInfo);//顯示店家資訊陣列

        //return docStoreID.data();
        console.log(this.state.storeData.storeInfo);
        return this.state.storeData.storeInfo;//retrun storeInfo
      }
      catch (error) {
        console.log("提取文件時出錯:", error);
        return false;
      }
    },

    async readClick(i){ 
      console.log("i");    
      let docRefStoreID = await firebase.firestore().collection("test")        
      let docStoreID = await docRefStoreID.get();
      this.state.storeData.storeID=docStoreID.docs;//取所有店家ID
      console.log(this.state.storeData.storeID[1].id);
    }

   

  }
})
