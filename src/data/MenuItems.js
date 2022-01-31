import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import Perfil from '../components/Perfil';
import Juegos from '../components/Juegos';
import PelisGhibli from '../components/PelisGhibli';

export const MenuItems = [
  {
    id: 1,
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path: '/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path: '/Juegos',
    title: 'Juegos',
    component: Juegos,
  },
  {
    id: 5,
    path: '/PelisGhibli',
    title: 'PelisGhibli',
    component: PelisGhibli,
  },
];

/*
  path
  id
  title
  component

*/
