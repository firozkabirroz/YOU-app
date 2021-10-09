<template>
 <ion-page>

    <ion-header>
        <ion-toolbar>
          
            <ion-title>
              <div class="header">
            <div><router-link to="patientUpdate"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z" fill="white"/></svg></router-link></div>
            <div><ion-title class="login">Patient Details</ion-title></div>
            </div>
            </ion-title> 
        </ion-toolbar>    
    </ion-header>

<!--content-->

    <ion-content>

       
<!--donate to patient-->
      <ion-card>

      <ion-card-content>
        <div>

          <img src="../images/kidwithmom.jpg" alt="">

        </div>

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reiciendis aliquid vero dolorem. Architecto exercitationem soluta quo assumenda repellat atque, tempore, cupiditate, quibusdam eveniet ullam vitae minima cum labore! Perferendis.</div>
        <div class="details">
          <ul><strong>Date</strong></ul>
          <ul><strong>Condition</strong></ul>
        </div>

        <div class="details">
          <ul>10/9/2021</ul>
          <ul>Recovering</ul>
        </div>

        <div class="details">
          <ul>8/9/2021</ul>
          <ul>Operation Successful</ul>
        </div>

        <div class="details">
          <ul>7/9/2021</ul>
          <ul>ICU</ul>
        </div>

        <div>
          Contact no: 01716696*** 
        </div>
      </ion-card-content>
        
      </ion-card>

      
    </ion-content>
  
    
  
</ion-page>
  
</template>

<script>
//src="https://code.iconify.design/2/2.0.3/iconify.min.js";
import { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    
    IonCard,
    IonCardContent
    
    
    } from '@ionic/vue';
import { defineComponent } from 'vue';
//import { Icon } from '@iconify/vue';

export default defineComponent({
  components: { 
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    
    IonCard,
    IonCardContent
    
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
 .details{
   display: flex;
   justify-content: space-between;
 }

 
 
</style>
