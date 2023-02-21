import { createRef } from 'react';
import { createBrowserRouter, useOutlet } from 'react-router-dom';
import Header from './components/Header/Header'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import './App.scss';

const routes = [
  { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
  { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function App() {
  const currentOutlet = useOutlet()

  return (
    <>
      <Header />
      <main>
        {currentOutlet}
      </main>
    </>
  )
}

export default router;
