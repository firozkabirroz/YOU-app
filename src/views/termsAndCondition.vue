<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
            <ion-title><span class="headeryou">YOU</span></ion-title>
            </ion-toolbar>    
        </ion-header>
        <ion-content>
          <p class = 'termsPara'> YOU <br> is crowdfunding <br> platform <br> who aims to be a <br> helping hand
          for the people in dire need.</p>


          <div class="termsandconditions">
            <p class=termsandconditionscheckbox><ion-checkbox></ion-checkbox>
            <a style="margin-left:5px;">terms & conditions</a></p>
            
            <ion-button router-link="/patientImage" class="button">Agree</ion-button>
          </div>
        </ion-content>
    </ion-page>
</template>

<script>

import {IonPage, 
IonHeader, 
IonTitle, 
IonToolbar,
IonContent,
IonButton
} from '@ionic/vue';
export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar, 
        IonTitle, 
        IonContent,
        IonButton
    }
}
</script>

<style scoped>
ion-toolbar{
  --ion-background-color:#FE8A87;
}
  .headeryou{
    font-size: 100%;
    font-weight:800;
    color: white;
  }

 .termsPara{
      text-align: center;
      font-size: 160%;
      color: #606060;
 }

.termsandconditions {
    position: fixed;
    bottom: 0;
    width: 100%;
}

.termsandconditionscheckbox{
  margin-left: 15px;
}

 ion-button{
   --background:#FE8A87;
 }

.button{
  margin-left:72% ;
  margin-bottom: 15px;
}
</style>