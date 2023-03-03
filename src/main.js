import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Login from './pages/login.vue'
import Register from './pages/register.vue'
import Home from './pages/home.vue'
import Dashboard from './pages/dashboard.vue';
import ExpenseRecord from './pages/expense-record.vue';
import ExpenseGenerator from './pages/expense-generate.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMobile, faLock, faEyeSlash, faEye, faAngleLeft, faUser, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
library.add(faMobile, faLock, faEyeSlash, faEye, faAngleLeft, faUser, faCalendarDays);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/expense-record',
        component: ExpenseRecord
    },
    {
        path: '/expense-generator',
        component: ExpenseGenerator
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')

