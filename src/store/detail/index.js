import {reqGetDetail} from '@/api'
const state ={
    details:{}
}
const getters ={
    categoryView(state){
        // 防止初始化时数据为空，导致这个getter也为undefined
        return state.details.categoryView ||{}
    },
    skuInfo(state){
        return state.details.skuInfo ||{}
    },
    spuSaleAttrList(state){
        return state.details.spuSaleAttrList||[]
    }

}
const actions ={
    async getDetails(context,value){
        let result = await reqGetDetail(value)
        console.log(result);
        if(result.code ===200){
            context.commit('GETDETAILS',result.data)
        }
    }
}
const mutations ={
    GETDETAILS(state,value){
        state.details = value
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}
