import Vue from 'vue'
import Vuex from 'vuex';
import firebase from "./firebase.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        list : [] //채딩방 리스트
        ,chat : [] //대화 리스트
        ,userInfoList : [] //회원정보 -- 이렇게 관리하면 안되는거 안다능
        ,isActiveChat:{} //현재 대화중인 채팅
    },mutations : {
        ['setList'](state,list){ return state.list = list },
        ['setChatList'](state,chat){ return state.chat = chat },
        ['setActive'](state,chatId){ return state.chatId = chatId },
        ['setUserInfoList'](state,userList){ return state.userList = userList }
    }
    ,actions:{
        getList:  function(){ //채팅방 리스트 
            firebase.getList().then((res)=>{
                this.state.list  = res;
            });
            this.commit('setList');
        }, getUserInfoList: function(){ //회원정보 조회
            firebase.getUserInfoList().then((res)=>{
                this.state.userInfoList = res;
            });
            this.commit('setUserInfoList');
        }, getChatList: function({commit, state}) { //채팅
            firebase.getChatList(state.isActiveChat.chatId).then((res)=>{
                state.chat = res;
            });
            commit('setChatList');

        }, changeChatting: function(store, payload) { 
           //채팅 대상 변경
           store.state.isActiveChat = {chatId: payload.chatId, targetNo: payload.target};
           store.commit('setActive');
           store.dispatch('getChatList');     
                
        }, sendMessage: function(store, payload) { //메시지 보내기
            const date =  new Date();
            const current =
            date.getFullYear()+""+
            ("0" + (date.getMonth() + 1)).slice(-2)+""+
            ("0" + date.getDate()).slice(-2)+""+
            ("0" + date.getHours()).slice(-2)+""+
            ("0" + date.getMinutes()).slice(-2);
            
            const obj = { 
                message: payload.msgValue
                ,chatId: this.state.isActiveChat.chatId
                ,regNo : 1 //로그인 유저가 없으므로 픽스
                ,regDts: current
            }
            firebase.sendMessage(obj).then(()=>{
               store.dispatch('getChatList');     
            });      
         }
    }
});