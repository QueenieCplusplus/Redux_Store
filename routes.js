// React.lazy(() => {})

/*lazy component 應在 Suspense component 內 render，
這使我們可以在等待 lazy component 載入時，顯示一些 fallback 內容（像是一個載入的符號）。*/

import React from 'react';

const Tables = React.lazy(() => import('./views/base/tables/Tables'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/tables', name: 'Tables', component: Tables },

];

export default routes;
