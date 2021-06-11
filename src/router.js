import { createWebHistory, createRouter } from "vue-router";
import Map from '@/views/Map'
import List from '@/views/List'
import Home from '@/views/Home'
import Whole from '@/views/Whole'
import Input from '@/views/Input'
import Maps from '@/views/Maps'
import SecondFood from '@/views/SecondFood'
import SecondMap from '@/components/second/SecondMap'
import SecondList from '@/components/second/SecondList'
import SecondInsert from '@/components/second/SecondInsert'
const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home,
  },
  {
    path: "/map",
    name: 'Map',
    component: Map,
  },
  {
    path: "/list",
    name: 'List',
    component: List,
  },
  {
    path: "/whole",
    name: 'Whole',
    component: Whole,
  },
  {
    path: "/input",
    name: 'Input',
    component: Input,
  },
  {
    path: "/maps",
    name: 'Maps',
    component: Maps,
  },
  {
    path: "/secondfood",
    name: 'SecondFood',
    component: SecondFood,
    children: [
      { path: 'insert', name: 'SecondInsert', component: SecondInsert },
      { path: 'list', name: 'SecondList', component: SecondList },
      { path: 'secondmap', name: 'SecondMap', component: SecondMap }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 