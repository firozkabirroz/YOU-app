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
         <ion-item>
          <ion-label position="floating">First Name</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Last Name</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Confirm Password</ion-label>
          <ion-input></ion-input>
        </ion-item>

      </div>

      <ion-button expand="full" class= "signUpButton">Sign up</ion-button>
    
      <p style="text-align:center;margin-top:30px;">
        <a>I have an account</a><br>

      </p>
    
    </ion-content>
  
  
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
import { defineComponent } from 'vue';

export default defineComponent({
  components: { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel, 
    IonInput, 
    IonItem }
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


