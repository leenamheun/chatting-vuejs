<template>
    <div class="roomHeader">
        <div class="userIcon">
            <img v-bind:src="'https://leenamheun.github.io/chatting_only_css/resources/images/chatListIcon/'+image()"><!-- -->
            </div>
        <div class="userName">{{name}}</div>
        <i class="icon fas fa-ellipsis-v fa-fw"></i>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'ChatHeaderComponent',
    data(){
        return{
            image: function(){
                const idx = this.$store.state.isActiveChat.targetNo;
                return this.$store.state.userInfoList[idx].image;
            }
        }
    },
    computed:{
        name: function(){
            const idx = this.$store.state.isActiveChat.targetNo;
            return this.$store.state.userInfoList[idx].memNm;
        }
    }
}
</script>

