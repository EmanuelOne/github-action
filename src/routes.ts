import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Faq from './pages/faq';
export const routers = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/faq',
    component: Faq,
  },
];
