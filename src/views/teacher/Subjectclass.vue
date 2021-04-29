<template>
  <div class="subjectclass">
    <el-card>
      <div class="searchbtns">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-search" v-model="content" />
        <el-select v-model="value" placeholder="课程类型选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="status" placeholder="课程班状态">
            <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-button type="primary" size="middle" icon="el-icon-search">查询</el-button>
        <el-button type="info" size="middle" icon="el-icon-remove-outline">重置</el-button>
        <el-button type="success" size="middle" icon="el-icon-plus">添加</el-button>
      </div>
      <div class="datashow-btns">
        <el-button type="primary"  icon="el-icon-edit">批量修改</el-button>
        <el-button type="danger"  icon="el-icon-search">批量删除</el-button>
        <el-button type="success"  icon="el-icon-upload2">导出Excel</el-button>
      </div>
      <el-table
        stripe
        :data="dataList"
        style="width: 100%">
        <el-table-column
          align="center"
          type="selection"
          width="25">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="课程">
        </el-table-column>
        <el-table-column
          align="center"
          prop="height"
          label="学分">
        </el-table-column>
        <el-table-column
          align="center"
          prop="around"
          label="类别">
        </el-table-column>
        <el-table-column
          align="center"
          prop="angle"
          label="任课教师">
        </el-table-column>
        <el-table-column
          align="center"
          prop="oliside"
          label="限选">
        </el-table-column>
        <el-table-column
          align="center"
          prop="saltposition"
          label="已选">
        </el-table-column>
        <el-table-column
          align="center"
          prop="density"
          label="未选">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          label="上课时间"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          prop="density"
          label="上课地点">
        </el-table-column>
        <el-table-column
          align="center"
          prop="status"
          label="状态">
          <template>
            <el-tag type="scuccess">已确认</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="120">
          <template >
              <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: [
        {
          date: '2016-05-02',
          name: '12',
          height: '22',
          around: '11',
          angle: '16.5',
          oliside: '83',
          saltposition: '34.56',
          density: '1.8',
          status: '1'
        },
        {
          date: '2016-05-02',
          name: '12',
          height: '22',
          around: '11',
          angle: '16.5',
          oliside: '83',
          saltposition: '34.56',
          density: '1.8',
          status: '2'
        }
      ],
      options: [{
        value: '选项1',
        label: '金融'
      }, {
        value: '选项2',
        label: '计算机'
      }, {
        value: '选项3',
        label: '电子信息'
      }],
      options2: [{
        value: '选项1',
        label: '已确认'
      }, {
        value: '选项2',
        label: '未确认'
      }],
      value: '',
      status: '',
      content: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.subjectclass{
  height: 100%;
  .searchbtns{
      display: flex;
      .el-input{
          width: 210px;
          margin-right: 20px;
      }
      .el-select{
          margin-right: 20px;
      }
  }
  .datashow-btns{
    margin-top: 25px;
    margin-bottom: 25px;
  }
}

</style>
