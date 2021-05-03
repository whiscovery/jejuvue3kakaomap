import { createWebHistory, createRouter } from "vue-router";
import Map from './components/Map'
import List from './components/List'
import Home from './components/Home'
import Whole from './components/Whole'
import Input from './components/Input'

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
  },
  {
    path: "/whole",
    component: Whole,
  },
  {
    path: "/input",
    component: Input,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 