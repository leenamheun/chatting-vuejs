<template>
  <div id="app" class="frame">
      <ListHeaderTemplate/>
     
        <div class="roomHeader">
            <div class="userIcon">
                <img src="https://leenamheun.github.io/chatting_only_css/resources/images/chatListIcon/userInfo_2.png"><!-- -->
             </div>
            <div class="userName">Leenamehun</div>
            <i class="icon fas fa-ellipsis-v fa-fw"></i>
        </div>
        <ChatComponent />
        <ListComponent />
       
       <ChatInputFormTemplate />
    </div>
</template>

<script>

import "./resources/main.css";
import "./resources/hack.css";
import ListHeaderTemplate from "./templates/ListHeaderTemplate.vue";
import ChatInputFormTemplate from "./templates/ChatInputFormTemplate.vue";
import ListComponent from './components/ListComponent.vue'
import ChatComponent from './components/ChatComponent.vue'


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
  components:{
      ListHeaderTemplate,ChatInputFormTemplate,
      ListComponent, ChatComponent
  }
}
</script>
