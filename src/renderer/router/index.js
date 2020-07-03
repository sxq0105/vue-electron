import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/AnnouncementPage/AnnouncementPage.vue'
import main from '@/components/MainWindow/main.vue'
import index1 from '@/components/MainWindow/index.vue'
import home from '@/components/MainWindow/home.vue'
import phoneNumber from '@/components/PhoneNumberPage/phoneNumber.vue'
import readId from '@/components/ReadIdPage/readId.vue'
import informationRecord from '@/components/InformationRecordPage/informationRecord.vue'
import photograph from '@/components/PhotographPage/photograph.vue'
import photoComparison from '@/components/PhotographPage/photoComparison.vue'
import queryLayout from "@/components/QueryLayoutPage/queryLayout.vue"
import investMoney from "@/components/InvestMoneyPage/investMoney.vue"
import printing from "@/components/PrintingPage/printing.vue"
import printResults from "@/components/PrintingPage/printResults.vue"
import choosePaymentMethod from '@/components/PaymentMethodPage/choosePaymentMethod'
import scanningPayment from '@/components/PaymentMethodPage/scanningPayment'
import selfInspection from '@/components/SelfInspectionPage/selfInspection'
import enterprise from '@/components/EnterprisePage/enterprise'
import scanEmpower from '@/components/EnterprisePage/scanEmpower'
import error from '@/components/errorPage/error'
import paymentTimeout from '@/components/errorPage/paymentTimeout'
import recognitionFailed from '@/components/errorPage/recognitionFailed'
import reminder from '@/components/errorPage/reminder'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainWindow',
      component: main,
      meta: {
        title: "首页"
      },
      children: [
        // {
        //   path: '/',
        //   name: 'index1',
        //   component: index1,
        //   meta: {
        //     title: "index1"
        //   }
        // },
        {
          path: '/',
          name: 'index',
          component: index,
          meta: {
            title: "firstPage"
          }
        },
        {
          path: '/AnnouncementPage',
          name: 'AnnouncementPage',
          component: index,
          meta: {
            title: "twoPage"
          }
        },
        {
          path: '/home',
          name: 'home',
          component: home,
          meta: {
            title: "home"
          }
        },
        {
          path: '/phoneNumber',
          name: 'phoneNumber',
          component: phoneNumber,
          meta: {
            title: "phoneNumber"
          }
        },
        {
          path: '/readId',
          name: 'readId',
          component: readId,
          meta: {
            title: "readId"
          }
        },
        {
          path: '/informationRecord',
          name: 'informationRecord',
          component: informationRecord,
          meta: {
            title: "informationRecord"
          }
        },
        {
          path: '/photograph',
          name: 'photograph',
          component: photograph,
          meta: {
            title: "photograph"
          }
        },
        {
          path: '/photoComparison',
          name: 'photoComparison',
          component: photoComparison,
          meta: {
            title: "photoComparison"
          }
        },
        {
          path: '/queryLayout',
          name: 'queryLayout',
          component: queryLayout,
          meta: {
            title: "queryLayout"
          }
        },
        {
          path: '/investMoney',
          name: 'investMoney',
          component: investMoney,
          meta: {
            title: "investMoney"
          }
        },
        {
          path: '/printing',
          name: 'printing',
          component: printing,
          meta: {
            title: "printing"
          }
        },
        {
          path: '/printResults',
          name: 'printResults',
          component: printResults,
          meta: {
            title: "printResults"
          }
        },
        {
          path: '/choosePaymentMethod',
          name: 'choosePaymentMethod',
          component: choosePaymentMethod,
          meta: {
            title: "choosePaymentMethod"
          }
        },
        {
          path: '/scanningPayment',
          name: 'scanningPayment',
          component: scanningPayment,
          meta: {
            title: "scanningPayment"
          }
        },
        {
          path: '/selfInspection',
          name: 'selfInspection',
          component: selfInspection,
          meta: {
            title: "selfInspection"
          }
        },
        {
          path: '/enterprise',
          name: 'enterprise',
          component: enterprise,
          meta: {
            title: "enterprise"
          }
        },
        {
          path: '/scanEmpower',
          name: 'scanEmpower',
          component: scanEmpower,
          meta: {
            title: "scanEmpower"
          }
        },
        {
          path: '/error',
          name: 'error',
          component: error,
          meta: {
            title: "error"
          }
        },
        {
          path: '/paymentTimeout',
          name: 'paymentTimeout',
          component: paymentTimeout,
          meta: {
            title: "paymentTimeout"
          }
        },
        {
          path: '/recognitionFailed',
          name: 'recognitionFailed',
          component: recognitionFailed,
          meta: {
            title: "recognitionFailed"
          }
        },
        {
          path: '/reminder',
          name: 'reminder',
          component: reminder,
          meta: {
            title: "reminder"
          }
        }
      ]
    }
    ,
    {
      path: '*',
      redirect: '/'
    }
  ]
})