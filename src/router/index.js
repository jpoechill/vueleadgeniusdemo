import Vue from 'vue'
import Router from 'vue-router'
import BuildSurvey from '@/components/BuildSurvey'
import ReviewSurvey from '@/components/ReviewSurvey'
import SuccessSurvey from '@/components/SuccessSurvey'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BuildSurvey',
      component: BuildSurvey
    },
    {
      path: '/review',
      name: 'ReviewSurvey',
      component: ReviewSurvey
    },
    {
      path: '/success',
      name: 'SuccessSurvey',
      component: SuccessSurvey
    }
  ]
})
