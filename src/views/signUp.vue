<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title class="signup">Sign Up</ion-title>
        </ion-toolbar>    
    </ion-header>

    <ion-content>
      <!-- Inputs with labels -->
      <div class="signUpBox">

        <form @submit.prevent="
        mode== AuthMode.SignIn
        ?signInWithEmailPassword(email,password)
        :signUpWithEmailPassword(name,email,password)
        ">
        <ion-item v-if="mode==AuthMode.SignUp">
          <ion-label position="floating">Full Name</ion-label>
          <ion-input v-model="name"></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input v-model="password" type="password "></ion-input>
        </ion-item>
        
        <ion-button expand="full" class= "signUpButton" type="submit">
        {{ mode==AuthMode.SignIn?"sign in":"Sign Up" }}
      </ion-button>
    
      <p style="text-align:center;margin-top:30px;">
        <ion-button expand="full" class= "signUpButton" type="submit"
        @click="mode= mode === AuthMode.SignIn ? AuthMode.SignUp:AuthMode.SignIn"
        >
        {{ mode==AuthMode.SignIn?"sign Up":"Sign In" }}
      </ion-button>
      </p>
        </form>

      </div>
    </ion-content>
     <ion-card-content v-if="errorMsg" class="error-message">
       {{errorMsg}}
        </ion-card-content>
  
  
</ion-page>
  
</template>
<script>
import { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel, 
    IonInput, 
    IonItem } from '@ionic/vue';
    import {auth,db} from '../main';
    import {reactive,toRefs} from "vue";
    import {useRouter} from "vue-router";


const AuthMode = Object.freeze({
 SignIn,
  SignUp
});

import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name:"Authentication",
  components: { 
    
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel, 
    IonInput, 
    IonItem },
    
    setup(){
      const router = useRouter();
      const state = reactive({
        name:"",
        email:"",
        password:"",
        mode:AuthMode.SignIn,
        errorMsg:""
      })
      const signInWithEmailPassword = async (email,password)=>{
        try{
          if(!email || !password){
            state.errorMsg = "Email and Password Required"
            return;
          }
            await auth.signInWithEmailPassword(email,password);
            router.push("./homePage.vue");

        }catch(error){
          state.errorMsg = error.message;
        }
      }
      const signUpWithEmailPassword = async (name,email,password)=>{
        try{
          if(!name||!email||!password){
            state.errorMsg = "name , email, password required";
            return;
          }
          const authRes = await auth.createUserWithEmailandPassword(email,password);

          db.collection('users').doc(authRes.user?.uid).set({
            name,email
          });

          router.push("./logIn.vue");


        }catch(error){
          state.errorMsg = error.message;

        }
      };
      return {
        ...toRefs(state),
        signInWithEmailPassword,
        signUpWithEmailPassword,
        AuthMode,
      }

    },
});
</script>

<style scoped>

  ion-toolbar{
  --ion-background-color:#FE8A87;
  color:white;
  
}
  .signup{
    font-weight: bold;
  }

 .signUpBox{
     margin-top:5%;
     margin-bottom: 15%;
 }
  .signUpButton{
     margin-top:15%;
     --background:#FE8A87;
     width: 80%;
     margin:auto;

 }
 
 
</style>


