<template>   
   <div class="header">
        <router-link to="/dashboard">
            <font-awesome-icon class="ifa" icon="fa fa-angle-left" />
        </router-link>
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
    },
    beforeMount() {
        if(!localStorage.getItem('userid')) 
            this.LogoutCall();
    }
}
</script>
<style lang="postcss" scoped>

</style>