<template>
  <div class="pagination">
    <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
    <button v-if="startAndEnd.start>1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
    
    <button v-if="startAndEnd.start>2">•••</button>

    <button v-for="(item,index) in startAndEnd.end" :key="index" v-show="item>=startAndEnd.start" @click="$emit('getPageNo',item)" :class="{active:pageNo==item}">{{item}}</button>
    
    
    <button v-if="startAndEnd.end<totalPages-1">•••</button>
    <button v-if="startAndEnd.end<totalPages" @click="$emit('getPageNo',totalPages)" :class="{active:pageNo==totalPages}">{{totalPages}}</button>
    <button :disabled="pageNo==totalPages" @click="$emit('getPageNo',pageNo+1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
    
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:['total','pageSize','continues','pageNo'],
    computed: {
    totalPages(){
        return Math.ceil(this.total/this.pageSize)
    },
    startAndEnd(){
        const {totalPages,pageNo,continues} = this
        let start =0
        let end = 0
        // 当前页码总数没有分页量多
        if(totalPages<continues){
            start =1
            end = totalPages
        }else{
            start = pageNo-parseInt(continues/2)
            end = pageNo+parseInt(continues/2)
            // 当分页start小于1时,让其为1end为continues（5）
            if(start<1){
                start =1
                end = continues
            }
            // end大于整体页码时
            if(end>totalPages){
                end = totalPages
                start = totalPages-continues+1
            }
        }
        return {start,end}
        }
    },
    
  }
</script>

<style lang="less" scoped>
  .pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
