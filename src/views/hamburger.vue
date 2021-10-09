<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <div class="header">
            <div><router-link to="homePage"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z" fill="white"/></svg></router-link></div>
            <div><ion-title class="login">Dashboard</ion-title></div>
            </div>
        </ion-toolbar>    
    </ion-header>

    <ion-content>
       <ion-list>
    
    <ion-item>
      <ion-label>FAQ</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Support Us</ion-label>
    </ion-item>
    
    <ion-item>
      <ion-label>Log out</ion-label>
    </ion-item>
  </ion-list>
      
    
    </ion-content>
  
  
</ion-page>
  
</template>
<script>
import { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    
    toastController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    
  components: { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    
    
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


