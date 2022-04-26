import requests from './request'
import mockRequest from './mockRequest'
export const getBaseCategoryList = ()=>{
    return requests({url:'/product/getBaseCategoryList',method:'GET'})
}
// 引入banner数据，这里引入的是mock的数据，所以得换路径
export const getMockBannerList = ()=>{
    return mockRequest({url:'/banner',method:'GET'})
}
// 引入floor数据，这里引入的是mock的数据，所以得换路径
export const getMockFloorList = ()=>{
    return mockRequest({url:'/floor',method:'GET'})
}
// 引入Search数据
export const reqGetSearchList = (params)=>{
    return requests({url:'/list',method:'POST',data:params})
}