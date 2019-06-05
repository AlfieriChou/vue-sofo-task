<template>
  <div class="user-container">
    <section class="op">
      <el-col :span="20" class="filters">
        <span>用户账号:</span>
        <input type="text" class="username" />
        <el-button type="primary" size="small">查询</el-button>
      </el-col>
      <el-col :span="4" class="btns">
        <el-button type="primary" plain size="small">新增</el-button>
      </el-col>
    </section>
    <section class="table">
      <el-table :data="usersList">
        <el-table-column prop="name" label="用户账号"></el-table-column>
        <el-table-column prop="alias" label="姓名"></el-table-column>
        <el-table-column prop="phone" label="联系方式"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column width="120" label="用户账号">
          <template slot-scope="scope">
            <el-button type="text" @click.native="edit(scope.row)"
              >编辑</el-button
            >
            <el-button type="text" @click.native="del(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseList from '@/components/BaseList.vue'

interface User {
  name: string
  alias: string
  phone: string | number
  email: string | null
  createTime: number
  id: number
}

@Component
export default class Users extends Vue implements BaseList {
  private usersList: User[] = []

  public async created() {
    this.usersList = await this.getList()
  }

  // mock
  public async getList(): Promise<User[]> {
    const mock: User[] = [
      {
        name: 'xxx',
        alias: '拉拉',
        phone: 13012345678,
        email: null,
        createTime: 1559430138643,
        id: 2
      },
      {
        name: 'xxx',
        alias: '咔咔',
        phone: 13012345678,
        email: 'fafa@126.com',
        createTime: 1558550139611,
        id: 5
      }
    ]

    return mock
  }

  public edit(user: User): void {
    /** */
  }

  public del(user: User): void {
    /** */
  }
}
</script>

<style lang="less" scoped>
.user-container {
  height: 100%;
  width: 90%;
  margin: 0 auto;
}
.op {
  .filters {
    padding: 1em 0;
    text-align: left;
    .username {
      height: 32px;
      margin: 0 1em;
    }
  }
  .btns {
    padding: 1em 0;
    text-align: right;
  }
}
</style>
