import httpClient from "./http-client";

// Authentication
export const registrationCall = (data) => {
    return httpClient({
        url: 'signup',
        method: 'POST',
        data
    })
}

export const loginCall = (data) => {
    return httpClient({
        url: 'login',
        method: 'POST',
        data
    })
}

// Account Type
export const getAllTypename = () => {
    return httpClient({
        url: 'accounttype/list',
        method: 'GET'
    })
}
export const CreateType = (data) => {
    return httpClient({
        url:'/accounttype/create',
        method: 'POST',
        data
    })  
}

export const updateType = (id, data) => {
    return httpClient({
        url:`/accounttype/update/${id}`,
        method: 'PUT',
        data
    })   
}

export const deleteAccountType = (id) => {
    return httpClient({
        url: `/accounttype/delete/${id}`,
        method: 'DELETE'
    })
}
export const getAccountTypeById = (id) => {
    return httpClient({
        url: `accounttype/byid/${id}`,
        method: 'GET'
    })
}

// Expense Calls
export const submitExpense = (data) => {
    return httpClient({
        url:'/expense/create',
        method: 'POST',
        data
    })  
}
export const getallexpenseRecord = (data) => {
    return httpClient({
        url:'expense/filter',
        method: 'POST',
        data
    })
}
export const gettodayexpense = () => {
    return httpClient({
        url: 'expense/list',
        method: 'GET'
    })
}
export const DeleteExpense = (id) => {
    return httpClient({
        url: `/expense/delete/${id}`,
        method: 'DELETE'
    })
}
export const getExpenseById = (id) => {
    return httpClient({
        url: `/expense/byid/${id}`,
        method: 'GET'
    })
}
export const updateExpense = (id, data) => {
    return httpClient({
        url:`/expense/update/${id}`,
        method: 'PUT',
        data
    })   
}







