var firebaseConfig = {
    apiKey: "AIzaSyA9NLCQhZQVIX7BkoMMehTnrNixWBLW_J4",
    authDomain: "fir-tutorial-chat-b5518.firebaseapp.com",
    databaseURL: "https://fir-tutorial-chat-b5518.firebaseio.com",
    projectId: "fir-tutorial-chat-b5518",
    storageBucket: "fir-tutorial-chat-b5518.appspot.com",
    messagingSenderId: "227885504166",
    appId: "1:227885504166:web:154eade8ad2438e2404667",
    measurementId: "G-9FKBP3VD42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//고유 아이디 만들기
function guid() {
    function s4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}



const fireObj = {
    getList : async function(){
        let list = [];
        const query = firebase.database().ref("ChatList").orderByChild('memNo').equalTo(1);
       
        await query.once('value',
        function(snapshot){
            snapshot.forEach(element => {
                list.push(element.val());
            });
        });
        return list;           
    },
    getUserInfoList : async function(){
        let obj = {};
        const query = firebase.database().ref("Member").orderByKey();
        
        await query.once('value',
        function(snapshot){
            snapshot.forEach(element => {
                obj[element.val().memNo]=element.val();
            });
        });
        return obj;           
    }
    ,getChatList : async function(chatId){
        let list = [];
        const query = firebase.database().ref("Chat/"+chatId).orderByChild("regDts")
        
        await query.on('value',
        function(snapshot){
            snapshot.forEach(element => {
               list.push(element.val());
            });
        });
        return list;           
    }
    ,sendMessage : async function(obj) { 
        firebase.database().ref('Chat/'+obj.chatId+'/'+guid()).set(obj);
    }    
}

export default fireObj;