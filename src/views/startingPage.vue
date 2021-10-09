<template>
  <ion-page>
      <ion-content>
        <div class="text">
          <p class="you">YOU</p>
          <p class="sharetocare">Share to care</p>
        </div>
     </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, 
IonContent 
} from '@ionic/vue';
//import { defineComponent } from 'vue';

export default{
  components: {
    IonPage,
    IonContent

   
  },

    created(){
      setTimeout( () => this.$router.push({ path: '/termsAndCondition'}), 10000);

    }
  }


</script>


<style scoped>

  ion-content{

    --ion-background-color:#FE8A87;

  }

  .text{
    text-align: center;
    margin-top: 50%;
  }

  .you{
    font-size: 400%;
    font-weight: bold;
    color: white;
    
  }

  .sharetocare{
    margin-top: -40px;
    color: #fdf8f1;
    
  }


</style>
