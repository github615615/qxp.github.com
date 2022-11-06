import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import routers from './routers';
import type { RoutersConfigType } from './routers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>lodaing.....</h1>}>
        <Routes>
          {RenderMyRoutes(routers)}
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function RenderMyRoutes(routesConfig: RoutersConfigType) {
  const route = routesConfig.map(({ path, name, component: Com, children }) => {
    return <Route key={Math.random()} path={path} element={<Com />}>
      {
        children ? RenderMyRoutes(children) : undefined
      }
    </Route>
  })
  console.log(route)
  return route
}
