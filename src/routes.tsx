import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ROUTES } from './utils/constants';
import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useRef } from 'react';

const AboutUsView = lazy(() => import('./components/pages/aboutus'));
const SubUrbs = lazy(() => import('./components/pages/solutions'));
const SocialResp = lazy(() => import('./components/pages/socialresp'));
const Home = lazy(() => import('./components/pages/home'));
const ContactUs = lazy(() => import('./components/pages/contact'));

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Not Found</p>
    </div>
  );
};

export const RouterProvider = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUTUS} element={<AboutUsView />} />
        <Route path={ROUTES.SOLUTIONS} element={<SubUrbs />} />
        <Route path={ROUTES.SOCIALRESP} element={<SocialResp />} />
        <Route path={ROUTES.CONTACT} element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export const AppTransitions = () => {
  const location = useLocation();
  const nodeRef = useRef(null);
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300} nodeRef={nodeRef}>
        <RouterProvider />
      </CSSTransition>
    </TransitionGroup>
  );
};
