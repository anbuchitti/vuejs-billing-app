<template>
    <div class="container">
        <div class="screen-frame">
            <router-link to="/"><i class="fa fa-angle-left"></i></router-link>
            <div class="upper-sec ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1"
                        d="M0,160L26.7,181.3C53.3,203,107,245,160,250.7C213.3,256,267,224,320,224C373.3,224,427,256,480,261.3C533.3,267,587,245,640,202.7C693.3,160,747,96,800,96C853.3,96,907,160,960,202.7C1013.3,245,1067,267,1120,250.7C1173.3,235,1227,181,1280,160C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                    </path>
                </svg>
                <h1>Create New Account</h1>
            </div>
        </div>
        <div class="lower-sec">
            <div class="register-form">
                <div class="form-control">
                    <font-awesome-icon class="ifa" icon="fa fa-user" />
                    <input type="text" placeholder="First Name" aria-label="First Name" name="First Name"
                        v-model="registerForm.firstname" required autofocus class="form-field">
                </div>
                <div class="form-control">
                    <font-awesome-icon class="ifa" icon="fa fa-mobile" />
                    <input type="number" placeholder="Mobile Number" aria-label="Mobile Number" name="mobileno"
                        v-model="registerForm.username" required class="form-field">
                </div>
                <div class="form-control">
                    <font-awesome-icon class="ifa" icon="fa fa-calendar-days" /> 
                    <input type="text" onfocus="(this.type='date')" onblur="(this.type='text')"
                        placeholder="Date of Birth" aria-label="Date of Birth" name="dob" v-model="registerForm.dob"
                        required class="form-field">
                </div>
                <div class="form-control">
                    <font-awesome-icon class="ifa" icon="fa fa-lock" />
                    <input type="password" placeholder="Password" aria-label="Password" name="password"
                        v-model="registerForm.password" required class="form-field">
                    <i class="fa fa-eye-slash" v-if="!ispassicon" @click="showPassword"></i>
                    <i class="fa fa-eye" v-if="ispassicon" @click="hidePassword"></i>
                </div>
                <button class="primary-btn" @click="userSignup(registerForm)">Sign Up</button>
            </div>
        </div>
    </div>
</template>
<script>
import { registrationCall } from './../../common/api-call';

export default {
    name: 'reister-block',
    data() {
        return {
            ispassicon: false,
            registerForm: {
                firstname: "",
                username: "",
                dob: "",
                password: ""
            }

        }
    },
    beforeMount(){
    if (localStorage.getItem('userid'))
      this.$router.push({ path: '/dashboard' });
    },
    methods: {
        showPassword() {
            this.ispassicon = true;
            document.getElementsByName("password")[0].type = "text";
        },
        hidePassword() {
            this.ispassicon = false;
            document.getElementsByName("password")[0].type = "password";
        },
        userSignup(formData) {
            registrationCall(formData).then((data) => {
                if (!data.data.error) {
                    localStorage.setItem('userid', JSON.stringify(formData.username))
                    this.$router.push({ path: '/dashboard' }).catch(() => { });
                }
            })
        }
    }
}
</script>
