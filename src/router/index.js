import { createRouter, createWebHistory } from '@ionic/vue-router';

import startingPage from '../views/startingPage.vue'
import termsAndCondition from '../views/termsAndCondition.vue'
import patientImage from '../views/patientImage.vue'
import logIn from '../views/logIn.vue'
import signUp from '../views/signUp.vue'
import homePage from '../views/homePage.vue'
import dashBoard from '../views/dashBoard.vue'
import supportUs from '../views/supportUs.vue'
import successStory from '../views/successStory.vue'
import createFundPost from '../views/createFundPost.vue'
import payment from '../views/payment.vue'
import userProfile from '../views/userProfile.vue'
import instantFund from '../views/instantFund.vue'
import patientUpdate from '../views/patientUpdate.vue'
import notificationPage from '../views/notificationPage.vue'
import userProfileEdit from '../views/userProfileEdit.vue'
import patientDetails from '../views/patientDetails.vue'
import homePage1 from '../views/homePage1.vue'
import menu from '../views/menu.vue'



const routes = [
  {
    path: '/',
    redirect: '/logIn'
  },
  {
    path: '/startingPage',
    component: startingPage
  },
  {
    path: '/termsAndCondition',
    component: termsAndCondition
  },
  {
    path: '/patientImage',
    component: patientImage
  },
  {
    path: '/logIn',
    component: logIn
  },
  {
    path: '/signUp',
    component: signUp
  },
  {
    path: '/homePage',
    component: homePage
  },
  {
    path: '/dashBoard',
    component: dashBoard
  },
  {
    path: '/supportUs',
    component: supportUs
  },
  {
    path: '/successStory',
    component: successStory
  },
  {
    path: '/createFundPost',
    component: createFundPost
  },
  {
    path: '/payment',
    component: payment
  },
  {
    path: '/userProfile',
    component: userProfile
  },
  {
    path: '/instantFund',
    component: instantFund
  },
  {
    path: '/patientUpdate',
    component: patientUpdate
  },
  {
    path: '/notificationPage',
    component: notificationPage
  },
  {
    path: '/userProfileEdit',
    component: userProfileEdit
  },
  {
    path: '/patientDetails',
    component: patientDetails
  },
  {
    path: '/homePage1',
    component: homePage1
  },
  {
    path: '/menu',
    component: menu
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
