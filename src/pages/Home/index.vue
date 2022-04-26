<template>
    <div>
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="item in floorList" :key="item.id" :list="item"></Floor>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from './LIstContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
export default {
    name:'Home',
    components:{ListContainer,Recommend,Rank,Like,Floor},
    mounted() {
        this.$store.dispatch('getFloorList')
    },
    computed: {
        ...mapState({
            floorList:state=>state.home.floorList
        })
    },
}
</script>

<style>

</style>