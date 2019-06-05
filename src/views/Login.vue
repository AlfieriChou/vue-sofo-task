<template>
  <div class="login-container">
    <div class="ct">
      <h4>{{ appName }}</h4>
      <div class="box">
        <el-row class="title">用户登录</el-row>
        <el-row class="line">
          <el-input
            placeholder="请输入您的账号"
            prefix-icon="el-icon-user"
            v-model="username"
          />
        </el-row>
        <el-row class="line">
          <el-input
            placeholder="请输入您的密码"
            prefix-icon="el-icon-lock"
            v-model="password"
            show-password
          />
        </el-row>
        <el-row class="line">
          <el-col :span="12" class="text-left">
            <el-checkbox>记住密码</el-checkbox>
          </el-col>
          <el-col :span="12" class="text-right">
            <span class="forget">忘记密码</span>
          </el-col>
        </el-row>
        <el-row class="line lastone">
          <el-button type="primary" class="btn" @click.native="login"
            >登录</el-button
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { appName } from '@/scripts/definition'
import { Input } from 'element-ui'
import { login } from '../service/login'

@Component({
  components: {
    [Input.name]: Input
  }
})
export default class Login extends Vue {
  private appName: string = appName
  private username: string = ''
  private password: string = ''

  public async login() {
    const params = {
      username: this.$data.username,
      password: this.$data.password
    }
    const res = await login(params)
    this.$router.replace({ name: 'home' })
  }
}
</script>

<style lang="less" scoped>
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.login-container {
  height: 100%;
  position: relative;
  .ct {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 400px;
    min-height: 300px;
  }
  .box {
    width: 100%;
    border: solid 1px #dcdfe6;
    padding: 40px 30px;
    border-radius: 4px;
    .title {
      .text-left;
      .line;
    }
    .line {
      margin-bottom: 1em;
      &.lastone {
        margin-bottom: 0;
      }
    }
    .btn {
      width: 100%;
      letter-spacing: 1em;
      text-indent: 1em;
    }
    .forget {
      font-size: 14px;
      cursor: pointer;
      color: #606266;
    }
  }
}
</style>
