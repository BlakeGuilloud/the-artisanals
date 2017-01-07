import { App, HeaderContainer, HomeContainer, OpeningContainer } from './containers';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: OpeningContainer },
  childRoutes: [
    { path: '/home', component: HomeContainer },
  ],
};

export default routes;
