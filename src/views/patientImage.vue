<template>
  <ion-page>
      <ion-header>
          <ion-toolbar>
            <ion-title><span class="headeryou">YOU</span></ion-title>
          </ion-toolbar>    
        </ion-header>

      <ion-content>
                   
          <ion-slides pager="true" :options="slideOpts">
            
                <ion-slide>
                <img src="../images/kidwithmom.jpg">
                </ion-slide>
                <ion-slide>
                <img src="../images/kidwithmom.jpg">
                </ion-slide>
                <ion-slide>
                <img src="../images/kidwithmom.jpg">
                </ion-slide>
                
          </ion-slides>

           
     </ion-content>
     <ion-button router-link="/logIn" class="button">Donate Now</ion-button>
  </ion-page>
</template>

<script>
import { IonPage, 
IonContent,
IonHeader,
IonToolbar,
IonTitle,
IonSlides,
IonSlide,

IonButton
} from '@ionic/vue';
//import { defineComponent } from 'vue';

export default{
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSlide,
    IonSlides,
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

   ion-slides {
      height: 100%;
    }
   ion-button{
   --background:#FE8A87;
   position: relative;
  

 }
 .button{
   margin: 0;
  position: absolute;
  top: 90%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
 }
  

</style>