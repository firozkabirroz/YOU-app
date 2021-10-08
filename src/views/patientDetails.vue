<template>
 <ion-page>

    <ion-header>
        <ion-toolbar>
          
            <ion-title>
              <div class="header">
              <span class="headeryou">Patient Update
                
              </span>
              
            
              </div>
            </ion-title> 
        </ion-toolbar>    
    </ion-header>

<!--content-->

    <ion-content>

       
<!--donate to patient-->
      <ion-card>

      <ion-card-content>
        <div class="imgandstate">
          <ul class="imgdiv">
            <img class="img" src="../images/kidwithmom.jpg">
          </ul>
          <ul class="state">
            <ul>
              <span class="patientstate">
                Cancer Patient
              </span>
                  
            </ul>
            <ul>
              Click here to get updates
            </ul>
          </ul>
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
    justify-content: space-between;
  }

  .headeryou{
    
    
    font-weight:600;
    color: white;
  }






/*content*/


  ion-card{
    width: 90%;
    margin-left: 5%;
    /* --background:#bdffc4; */
  }

  ion-footer{
    width: 120%;
    margin-left: -10%;
  }

  .imgandstate{
    display: flex;
    margin-left: -14%;
    margin-top: -5%;
    
    
  }

  .imgdiv{
    width: 40%;
  }

  .img{
    height: 100%;
    
        
  }

  .patientstate{
    color:black;
    font-size: 1.5em;
  }

  .state{
    margin-left:-20%;
  
  }

  .meter { 
  height: 18px; /* Can be anything */
  position: relative;
  background: #F8CCCC;
  border-radius: 25px;
  padding: 5px;
  width: 65%;
  
}

nav{
  display: flex;
}

/* ion-button{
  --background:#92EF9C;
  width: 100px;
  font-size: 10px;
  font-weight: bold;
  margin-top: -10px;
  margin-left: 5px;
} */

/*footer*/

  .footericon{
    display: flex;
    justify-content: space-around;
    width: 100%;
    
  }
svg{
    height: 50px;
  }

#home{
  background-color: #ff6d68;
  width: 13%;
  padding: 6px;
  margin-left:-2% ;
  margin-right: -3%;
  
}

</style>


