import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import index from '@/components/page/index';
import intro from '@/components/page/intro';
import sign from '@/components/page/sign';
import register from '@/components/page/register';
import e404 from '@/components/page/e404';
import wiki from '@/components/page/wiki';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'intro',
          component: intro,
          meta: {
            title: 'madewiki introduce',
            breadcrumb: [{
              text: 'Welcome',
              href: '/',
            }],
          },
        },
        {
          path: '/wiki',
          name: 'wiki',
          component: wiki,
          meta: {
            title: 'Wiki',
            breadcrumb: [{
              text: 'WikiWiki',
              href: '/',
            }],
          },
        },
      ],
    },
    {
      path: '/sign',
      name: 'sign',
      component: sign,
    },

    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '*',
      name: 'e404',
      component: e404,
    },
  ],
});
