<template>
    <div class="chatList">
        <a  v-for="(item, index) in list" v-bind:key="index">
            <ListItemTemplate v-bind:item="item"/>
        </a>
    </div>
</template>

<script>
import ListItemTemplate from '../templates/ListItemTemplate.vue';
export default {
    created(){
      this.$store.dispatch("getList");
    }, computed : {
        list(){
            return this.$store.state.list;
        }
    }, components : {
        ListItemTemplate
    }
}
</script>