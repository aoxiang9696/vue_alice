import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home'
import Classify from '@/view/classify'
import GoodList from '@/view/goodList'
import GoodsDetail from '@/view/goodsDetail'
import Test from '@/view/test'
import TestCity from '@/view/testCity'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
    	path:'/',
    	name:'/',
        components:{
        	default:Home
        }
    },
    {
    	path: '/classify',
    	name:'Classify',
    	component:Classify
    },
    {
        path:'/goodList',
        name:'GoodList',
        component: GoodList
    },
    {
        path:'/goodsDetail',
        name:'GoodsDetail',
        component:GoodsDetail
    },
    {
        path:'/test',
        name:'Test',
        component:Test
    },
    {
        path:'/testCity',
        name:'TestCity',
        component:TestCity
    }
  ]
})
