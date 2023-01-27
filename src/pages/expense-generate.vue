<template>
    <div class="container">
        <dashboard-header></dashboard-header>
        <div class="form-sec">

            <div class="form-control">
                <label class="lft-label">Type Name</label>
                <select type="text" class="form-field" v-model="reqBody.typename">
                    <option v-for="item in typenamelist" :key="item.uniqueid">{{ item.typename }}</option>
                </select>
            </div>

            <div class="form-control">
                <label class="lft-label">Remarks</label>
                <input type="text" class="form-field" v-model="reqBody.remarks" />
            </div>
            <div class="form-control">
                <label class="lft-label">Amount</label>
                <input type="number" class="form-field" v-model="reqBody.amount" />
            </div>
            <button class="primary-btn" @click="submitRecord()">submit</button>
        </div>
        <div>
            <expense-table :expenserecords="todayExpenseList" />            
        </div>
    </div>
</template>

<script>

import ExpenseTable from '@/components/expense-table.vue';
import DashboardHeader from '@/components/dashboard-header.vue';
import { getAllTypename, submitExpense, gettodayexpense } from './../../common/api-call';
import { format } from 'date-fns';

export default {
    name: 'Expense-Generator',
    components: {
        'dashboard-header': DashboardHeader,
        'expense-table' : ExpenseTable
    },
    data() {
        return {
            todayExpenseList: [],
            typenamelist: [],
            reqBody: {
                typename: '',
                amount: 0,
                remarks: ''
            },
        }
    },
    mounted() {
        this.getTodayExpenseList();
        getAllTypename().then((typenamels) => {
            this.typenamelist = typenamels.data;
        }).catch((err) => {
            console.log(err)
        })
    },
    methods: {
        dateformat(datestring) {
            return format(new Date(datestring), 'LLL do yyyy HH:mm')
        },
        submitRecord() {
            submitExpense(this.reqBody).then((res) => {
                console.log(res)
                this.reqBody = {
                    typename: '',
                    amount: 0,
                    remarks: ''
                }
                this.getTodayExpenseList();
            }).catch((err) => {
                    console.log(err)
                })
        },
        getTodayExpenseList() {
            gettodayexpense().then((expenselist) => {
                this.todayExpenseList = expenselist.data;
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}

</script>

<style scoped>
#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td,
#customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even) {
    background-color: #f2f2f2;
}

#customers tr:hover {
    background-color: #ddd;
}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}
</style>