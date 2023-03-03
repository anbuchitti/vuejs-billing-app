<template>
    <div className="container">
        <!-- <DashboardHeader></DashboardHeader> -->
        <div className="form-sec">
            <div className="form-control">
                <label className="lft-label">Typename</label>
                <input type="text" className="form-field" name='typename' id='typename' :model="typename" required />
            </div>
            <button className="primary-btn" @click="accountTypeSubmit">submit</button>
        </div>
        <div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Typename</th>
                        <th>Unique Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :for="item in typenamelist" :key="item">
                        <td>{{item?.typename}}</td>
                        <td>{{item?.uniqueid}}</td>
                        <td>
                            <font-awesome-icon @click="navigate(item?._id)" class="ifa hov clr-red" icon="fa fa-pencil-alt" /> /
                            <font-awesome-icon @click="deleteAccount(item?._id)" class="ifa hov clr-red" icon="fa fa-trash-alt" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import DashboardHeader from './../components/dashboard-header.vue';
import { getAllTypename, CreateType, deleteAccountType, getAccountTypeById, updateType } from './../../common/api-call';

export default {
    name: 'account-type',
    components: [DashboardHeader],
    data: () => {
        return {
            typename: '',
            typenamelist: []
        }
    },
    created() {
        this.getTypenamelist();
    },
    methods: {
        getTypenamelist() {
            getAllTypename().then((items) => {
                let typenamelist = (!items.data.error) ? items.data : []
                this.typenamelist = typenamelist
                console.log( this.typenamelist)
            });
        },
        accountTypeSubmit() {
            const uniqueid = (this.typename?.toLowerCase()).replace(/ /g, '_');
            let id = this.$router?.query?.id;
            let req = id ? updateType(id, { uniqueid, typename: this.typename }) : CreateType({ uniqueid, typename: this.typename });
            req.then(() => {
                this.getTypenamelist();
                id ? this.getTypeById(id) : this.resetForm();
            })
        },
        deleteAccount(id) {
            deleteAccountType(id).then((res) => {
                if (res.data.deletedCount)
                    this.getTypenamelist();
            })
        },
        navigate(id) {
            this.$router.push({ path: '/account-type', query: { id } }).catch(() => { });
            // pathname: '/account-type',
            // search: `?id=${e._id}`
        },
        getTypeById(id) {
            getAccountTypeById(id).then((data) => this.typename = data.data.typename)
        },
        resetForm() {
            this.typename = '';
        }

    }
}
</script>
