<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <div class="header">
            <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z" fill="white"/></svg></div>
            <div><ion-title class="login">Payment</ion-title></div>
            </div>
        </ion-toolbar>    
    </ion-header>

    <ion-content>


        <p>
            Our SSL payment gate way is coming soon. Send money to 01646236*** number. After that to confirm fill up the forms below
        </p>
      <!-- Inputs with labels -->
      <div class="logInBox">
        <ion-item>
        <ion-label>Select Payment option</ion-label>
        <ion-select placeholder="Select One">
            <ion-select-option value="b">Bkash</ion-select-option>
            <ion-select-option value="n">Nagad</ion-select-option>
            <ion-select-option value="r">Rocket</ion-select-option>
        </ion-select>
        </ion-item>         

        <ion-item>
          <ion-label position="floating">Send money from number</ion-label>
          <ion-input type="number"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Amount</ion-label>
          <ion-input type="number"></ion-input>
        </ion-item>

      </div>

      <ion-button @click="openToast" expand="full" class= "logInButton">Submit</ion-button>
    
      
    
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
    toastController } from '@ionic/vue';
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
    IonItem 
    },
     methods: {
    async openToast() {
      const toast = await toastController
        .create({
          message: 'Thank you, You shared to care!',
          duration: 1000
        })
      return toast.present();
    },
}

});



</script>

<style scoped>

  ion-toolbar{
  --ion-background-color:#FE8A87;
  color:white;

  
}

.header{
    display: flex;
}

  .login{
    font-weight: bold;
  }

p{
    margin: 2% 3%;
    font-size: 20px;
}

 .logInBox{
     margin-top:5%;
     margin-bottom: 15%;
 }
  .logInButton{
     margin-top:15%;
     --background:#92EF9C;
     
     width: 80%;
     margin:auto;

 }
 
 
</style>


