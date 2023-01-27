<template>
    <div class="container">
        <dashboard-header></dashboard-header>
        <div class="list-item">
            <li class="card-item"><router-link to="/expense-record">Account Type</router-link></li>
            <li class="card-item"><router-link to="/expense-record">Income Generate</router-link></li>
            <li class="card-item"><router-link to="/expense-generator">Expense Generate</router-link></li>
            <li class="card-item"><router-link to="/expense-record">Income Record</router-link></li>
            <li class="card-item"><router-link to="/expense-record">Expense Record</router-link></li>
        </div>
    </div>
</template>
<script>
import DashboardHeader from './../components/dashboard-header.vue';

export default {
    name: 'dashboard-block',
    components: {
        'dashboard-header': DashboardHeader
    },
    beforeMount(){
        if(!localStorage.getItem('userid'))
            this.$router.push({path: '/'}).catch(()=>{});
    }
}
</script>