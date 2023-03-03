<template>
    <div class="container">
        <dashboard-header></dashboard-header>
        <div class="form-sec">

            <div class="form-control">
                <label class="lft-label">Start Date</label>
                <input type="date" class="form-field" v-model="reqBody.startdate" />
            </div>

            <div class="form-control">
                <label class="lft-label">End Date</label>
                <input type="date" class="form-field" v-model="reqBody.enddate" />
            </div>
            <button class="primary-btn" @click="filterRecord()">Filter</button>
        </div>
        <div>
            <expense-table :expenserecords="expenserecords" />
        </div>
    </div>
</template>
<script>
import ExpenseTable from '@/components/expense-table.vue';
import { getallexpenseRecord } from './../../common/api-call';
import DashboardHeader from './../components/dashboard-header.vue';

export default {
    name: 'Expense-Record',
    components: {
        'expense-table': ExpenseTable,
        'dashboard-header': DashboardHeader,
    },
    data: () => {
        return {
            reqBody: {
                startdate: null,
                enddate: null
            },
            expenserecords: []
        }
    },
    methods: {
        filterRecord() {
            getallexpenseRecord(this.reqBody).then((expenserecord) => {
                this.expenserecords = expenserecord.data;
            })
        }
    }
}
</script>
