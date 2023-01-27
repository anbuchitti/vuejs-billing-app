<template>   
   <div class="header">
        <router-link to="/dashboard"><i class="fa fa-angle-left"></i></router-link>
        <label class="lgt" @click="LogoutCall()">Logout</label>
   </div>
</template>
<script>
export default {
    name:'dashboard-header',
    methods: {
        LogoutCall() {
            localStorage.clear();
            this.$router.push('/');
        }
    }
}
</script>
<style lang="postcss" scoped>

</style>