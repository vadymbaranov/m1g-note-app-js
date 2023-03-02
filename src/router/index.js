import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../components/TheHome.vue'
import NoteList from '../views/NoteList.vue'
import NoteItem from '../views/NoteItem.vue'
import NoteDelete from '../views/NoteDelete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheHome,
    },
    {
      path: '/edit/:id',
      name: 'edit note',
      component: NoteList,
    },
    {
      path: '/create',
      name: 'create note',
      component: NoteItem,
    },
    {
      path: '/delete/:id',
      name: 'delete note',
      component: NoteDelete,
    }
  ]
})

export default router
