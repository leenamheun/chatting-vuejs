import Vue from 'vue'
import Vuex from 'vuex';
import firebase from "./firebase.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        list : [] //채딩방 리스트
        ,chat : [] //대화 리스트
        ,userInfoList : [] //회원정보 -- 이렇게 관리하면 안되는거 안다능
    },mutations : {
        ['setList'](state,list){ return state.list = list },
        ['setChatList'](state,list){ return state.list = list },
        ['setUserInfoList'](state,userList){ return state.userList = userList }
    }
    ,actions:{
        getList:  function(){
            firebase.getList().then((res)=>{
                this.state.list  = res;
            });
            this.commit('setList');
        }, getUserInfoList: function(){
            firebase.getUserInfoList().then((res)=>{
                this.state.userInfoList = res;
            });
            this.commit('setUserInfoList');
        }, getChatList: function() { 
            firebase.getChatList().then((res)=>{
                this.state.chat = res;
            });
            this.commit('setChatList');
        }
    }
});