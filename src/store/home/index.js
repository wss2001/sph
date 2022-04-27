import {getBaseCategoryList} from '@/api'
import {getMockBannerList} from '@/api'
import {getMockFloorList} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const actions = {
    async getCategoryList(context,value){
        let result = await getBaseCategoryList()
        // console.log(result);
        if(result.code===200){
            context.commit('GETCATEGORYLIST',result.data)
        }
    },
    async getBannerList(context,value){
        let result = await getMockBannerList()
        // console.log(result);
        if(result.code===200){
            context.commit('GETBANNERLIST',result.data)
        }
    },
    async getFloorList(context,value){
        let result = await getMockFloorList()
        // console.log(result);
        if(result.code===200){
            context.commit('GETFLOORLIST',result.data)
        }
    }
}
const getters = {}
const mutations = {
    GETCATEGORYLIST(state,value){
        state.categoryList = value
    },
    GETBANNERLIST(state,value){
        state.bannerList = value
    },
    GETFLOORLIST(state,value){
        state.floorList = value
        console.log(123);
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}