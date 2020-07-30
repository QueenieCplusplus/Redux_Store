// new usage for { HashRouter }
/* lazy component 應在 Suspense component 內 render，
這使我們可以在等待 lazy component 載入時，顯示一些 fallback 內容（像是一個載入的符號）。*/

import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// 想顯示的載入畫面
const loading = (
  <div>
  </div>
)

// 懶載入
const Login = React.lazy(() => import('./views/Login'));
const Register = React.lazy(() => import('./views/Register'));
const Page404 = React.lazy(() => import('./views/Page404'));
const Page500 = React.lazy(() => import('./views/Page500'));

// Suspense 元件及其屬性 fallback
// 其他有 HashRouter 元件的路由器
class App extends Component {
  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
