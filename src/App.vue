<template>
  <div id="app" class="frame">
      <ListHeaderTemplate/>
        <ChatHeaderComponent />
        <ChatComponent />
        <ListComponent />
     <ChatInputFormComponent />
    </div>
</template>

<script>

import "./resources/main.css";
import "./resources/hack.css";
import ListHeaderTemplate from "./templates/ListHeaderTemplate.vue";
import ChatInputFormComponent from "./components/ChatInputFormComponent.vue";


import ListComponent from './components/ListComponent.vue'
import ChatComponent from './components/ChatComponent.vue'
import ChatHeaderComponent from "./components/ChatHeaderComponent";

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
      this.$store.dispatch("getUserInfoList");
  },
  computed: { 
      seen(){
          return this.$store.state.isActiveChat.chatId != null
      }
        
  },
  components:{
      ListHeaderTemplate,ChatInputFormComponent,
      ListComponent, ChatComponent, ChatHeaderComponent
  }
}
</script>
