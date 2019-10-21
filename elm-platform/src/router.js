import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
	  {
	  	path:"/manage",
		name:"manage",
		component:()=>import(/* webpackChunkName: "manage" */ "./views/manage.vue"),
		  redirect:"/manage/mangge",
		  children:[
			  {
				  path:"/manage/mangge",
				  name:"mangge",
				  component:()=>import(/* webpackChunkName: "mangge" */"./views/mangge.vue")
			  },
			  {
			  	path:"/manage/userList",
				  name:"userList",
				  component:()=>import(/* webpackChunkName: "userList" */"./views/userList.vue")
			  },
			  {
			  	path:"/manage/shopList",
				  name:"shopList",
				  component:()=>import(/* webpackChunkName: "shopList" */"./views/shopList.vue")
			  },
			  {
			  	path:"/manage/foodList",
				  name:"foodList",
				  component:()=>import(/* webpackChunkName: "foodList" */"./views/foodList.vue")
			  },
			  {
			  	path:"/manage/orderList",
				  name:"orderList",
				  component:()=>import(/* webpackChunkName: "orderList" */"./views/orderList.vue")
			  },
			  {
			  	path:"/manage/adminList",
				  name:"adminList",
				  component:()=>import(/* webpackChunkName: "adminList" */"./views/adminList.vue")
			  },
			  {
			  	path:"/manage/addShop",
				  name:"addShop",
				  component:()=>import(/* webpackChunkName: "addShop" */"./views/addShop.vue")
			  },
			  {
			  	path:"/manage/addGoods",
				  name:"addGoods",
				  component:()=>import(/* webpackChunkName: "addGoods" */"./views/addGoods.vue")
			  },
			  {
			  	path:"/manage/visitor",
				  name:"visitor",
				  component:()=>import(/* webpackChunkName: "visitor" */"./views/visitor.vue")
			  },
			  {
			  	path:"/manage/vueEdit",
				  name:"vueEdit",
				  component:()=>import(/* webpackChunkName: "vueEdit" */"./views/vueEdit.vue")
			  },
			  {
			  	path:"/manage/adminSet",
				  name:"adminSet",
				  component:()=>import(/* webpackChunkName: "adminSet" */"./views/adminSet.vue")
			  },
			  {
			  	path:"/manage/explain",
				  name:"explain",
				  component:()=>import(/* webpackChunkName: "explain" */"./views/explain.vue")
			  },
		  ]
	  }
  ],
});
