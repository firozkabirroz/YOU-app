<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title class="login">Log In</ion-title>
        </ion-toolbar>    
    </ion-header>

    <ion-content>
      <!-- Inputs with labels -->
      <div class="logInBox">
        <ion-item>
          <ion-label position="floating">Email</ion-label>
          <ion-input></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input></ion-input>
        </ion-item>

      </div>

      <ion-button  expand="full" class= "logInButton" router-link="/homePage">Log In</ion-button>
    
      <p style="text-align:center;margin-top:30px;">
        <a>Forgot Password?</a><br>
        or<br>
        <a href="/signUp">Don't have an account?</a>

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
    IonItem,
    IonButton } from '@ionic/vue';
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
    IonItem,
    IonButton }
});
</script>

<style scoped>

  ion-toolbar{
  --ion-background-color:#FE8A87;
  color:white;
  
}
  .login{
    font-weight: bold;
  }

 .logInBox{
     margin-top:20%;
     margin-bottom: 15%;
 }
  .logInButton{
     margin-top:15%;
     --background:#FE8A87;
     width: 80%;
     margin:auto;

 }
 
 
</style>


