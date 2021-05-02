import { createWebHistory, createRouter } from "vue-router";
import Map from './components/Map'
import List from './components/List'
import Home from './components/Home'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/map",
    component: Map,
  },
  {
    path: "/list",
    component: List,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 