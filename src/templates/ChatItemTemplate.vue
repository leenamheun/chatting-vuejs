<template>
    <div v-bind:class="'msgItem '+flagByMine(this.item.regNo)">
        <div class="userIcon">
            <img v-bind:src="'https://leenamheun.github.io/chatting_only_css/resources/images/chatListIcon/'+userIcon(this.item.regNo)" alt="">
        </div>
        <div class="message">{{this.item.message}}</div>
    </div>
</template>


<script>
export default {
    name: 'listItem',
    props:['item','targetInfo']
    ,data(){
        return {
            flagByMine : function(regNo) { 
                if(regNo == 1 ){ return 'me' } //임의로 1번의 사용자로 픽스
                else return 'you';
            },
            userIcon : function(regNo){
                  return this.$store.state.userInfoList[regNo].image;
            }
        }
    }
}
</script>