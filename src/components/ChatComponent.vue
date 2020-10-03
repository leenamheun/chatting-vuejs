<template>
     <div class="msgList">
        <div v-for="(item, index) in list" v-bind:key="index">
            <ChatItemTemplate v-bind:item="item" v-bind:targetInfo="targetInfo"/>
        </div>
     </div>
</template>

<script>
import ChatItemTemplate from '../templates/ChatItemTemplate.vue';
export default {
    computed: { 
        list(){
            return this.$store.state.chat;
        }
    },
    created(){
        this.$store.dispatch('getChatList');
    }
    ,components : {
        ChatItemTemplate
    }
}
</script>