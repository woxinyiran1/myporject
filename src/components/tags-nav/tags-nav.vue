<template>
    <div class="tags-nav">
        <div class="tags-nav-wrap">
           <!-- <el-button type="primary">
                <i class="el-icon-arrow-left"></i>
            </el-button>
            <div class="scroll-outer">
                <transition name="el-fade-in-linear">
        
                </transition>
            </div>
            <el-button type="primary">
                <i class="el-icon-arrow-right"></i>
            </el-button> -->
        </div>
        <div style="height:100%;">
            <el-tabs type="card" v-model="editableTabsValue" closable @tab-remove="removeTab">
                <el-tab-pane
                    v-for="(item) in tabsList"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                >
                    {{item.content}}
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            editableTabsValue:'2',
            tabsList:[{
                title: 'Tab 1',
                name: '1',
                content: 'Tab 1 content'
            },{
                title: 'Tab 1',
                name: '2',
                content: 'Tab 1 content'
            },{
                title: 'Tab 1',
                name: '3',
                content: 'Tab 1 content'
            }]
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.tags-nav{
    position: relative;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
    user-select: none;
    width: 100%;
    height: 100%;
    .tags-nav-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn-con{
            width: 40px;
            height: 30px;
            background: #FFFFFF;
        }
        .scroll-outer{
            width: 100%;
            height: 40px;
            background: #ffffff;
        }
    }
    .el-tabs{
        ::v-deep(.el-tabs__nav-next) ,::v-deep(.el-tabs__nav-prev) {
            font-size: 14px;
        }
    }
    
}
</style>