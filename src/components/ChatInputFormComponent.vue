
<template>
    <div class="inputForm">
        <div class="inputBx">
            <input type="text" id="sendMsg" placeholder="Write your message"></input>
        </div>
        <div class="inputEtc">
            <div class="icons all">
                <i class="fa-grin far fa-3x"></i><!--색상 이모지 far-->
                <i class="fa-grin fas fa-3x"></i><!--색상 이모지 far-->
                <i class="fa-grin far fa-3x"></i><!--색상 이모지 far-->
            </div>
            <div class="icons more">
                <i class="far fa-plus-square fa-3x"></i>
            </div>

            <button class="sendBtn" @click="sendMessage">
                <i class="far fa-paper-plane fa-3x"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        sendMessage: function(){
            const msgValue = document.getElementById('sendMsg').value;
            this.$store.dispatch("sendMessage", {msgValue: msgValue} );
            document.getElementById('sendMsg').value = "";
            return;
        }
    }, mounted() { 
        const sendInput = document.getElementById('sendMsg');

        //vue component 위임
        const _this = this;
        sendInput.addEventListener('keyup', function (e) {
            if (e.keyCode === 13) {
                // code for enter
                if(sendInput.value && sendInput.value!="") _this.sendMessage();
            }
        });
    }
}
</script>