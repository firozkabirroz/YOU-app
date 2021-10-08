<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
            <div class="header">
            <div><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z" fill="white"/></svg></div>
            <div><ion-title class="login">Notification</ion-title></div>
            </div>
        </ion-toolbar>    
    </ion-header>

    <ion-content>

   
    
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
     } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    
  components: { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
     
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


