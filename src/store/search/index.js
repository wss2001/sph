import {reqGetSearchList} from '@/api'
const state = {
    searchList:{}
}
const actions = {
    // 由于是post请求，接口中得传递对应的数据，所以如果没有传递数据，就定义一个空数组给它
    async getSearchList(context,value={}){
        let result = await reqGetSearchList(value)
        if(result.code===200){
            context.commit('GETSEARCHLIST',result.data)
        }
    }
}
const getters = {
    attrsList(state){
        // console.log(state);
        // 如果网络不好的话，返回一个空数组，而不是undefined
        return state.searchList.attrsList ||[]
    },
    goodsList(state){
        return state.searchList.goodsList ||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    }
}
const mutations = {
    GETSEARCHLIST(state,value){
        state.searchList=value
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}