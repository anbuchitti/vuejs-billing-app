<template>
  <div class="screen-frame container" v-show="!(islogin || isregister)">
    <div class="frame-design">
      <div class="logo"></div>
      <div class="info-section">
        <div class="action">
          <button class="login-btn"><router-link to="/login">Login</router-link></button>
          <button class="register-btn"> <router-link to="/register">Register</router-link></button>
        </div>
        <div class="info">
          <h1 class="title">Billing App</h1>
          <p>We are providing billing you income and expense with chart explaination, like small scale of business</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-block',
  beforeMount(){
    if (localStorage.getItem('userid'))
      this.$router.push({ path: '/dashboard' }).catch((e) => { console.log(e) });
  }
}
</script>

<style>
@import url('./../assets/style.css');


button a {
  color: white;
  text-decoration: none;
}

.login-btn,
.login-btn a {
  background: white;
  color: rgb(8 8 195 / 85%);
}

.screen-frame {
  background-image: url('./../assets/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.frame-design {
  background: rgb(8 8 195 / 85%);
  height: 100%;
  width: 100%;
  padding: 0 15px;
}

.info-section {
  display: flex;
  flex-direction: column-reverse;
  height: 100vh;
}

h1.title {
  color: white;
  text-align: left;
  padding: 10px 0;
  font-size: 30px;
  margin: 5px 0;
}

.info p {
  color: white;
  text-align: justify;
  margin: 10px 0 50px 0;
}

.action {
  padding-bottom: 30px;
}
</style>
