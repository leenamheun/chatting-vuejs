<template>
    <div class="chatListItem">
        <div class="userIcon">
            <img v-bind:src="'https://leenamheun.github.io/chatting_only_css/resources/images/chatListIcon/'+userInfoImage(this.item.targetMemNo)"> 
        </div>
        <div class="msgInfo">
            <div class="sendUser">{{this.item.targetMemNm}}</div>
            <div class="sendMessage">????대화내용은 천천히 부르자구~~!</div>
        </div>
        <div class="addInfo">
            <i class="icon fas fa-star fa-lg"></i> 
            <span class="time">12:30pm</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'listItem'
    ,props:['item']
    , data () {
        return {
            userInfoImage : function(memNo){
                return this.$store.state.userInfoList[memNo].image;
            }
        }
    }
}
</script>