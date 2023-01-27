<template>
        <table id="customers">
            <tr>
                <th>Datetime</th>
                <th>Expense Type</th>
                <th>Expense Amount</th>
            </tr>
            <tr v-for="item in expenserecords" :key="item.uniqueid">
                <td>{{ dateformat(item.timestamp) }}</td>
                <td>{{ item.typename }}</td>
                <td>{{ item.amount }}</td>
            </tr>
        </table>
</template>
<script>
import { format } from 'date-fns';

export default {
    name: 'expense-table',
    props: ['expenserecords'],
    methods: {      
        dateformat(datestring) {
            return format(new Date(datestring), 'LLL do yyyy HH:mm')
        }
    }
}
</script>
