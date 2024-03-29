import { Route, Switch } from 'react-router-dom';
import { MainPage } from './components';
import { Book } from './components/Book';
import { ROUTES } from './constants';

export const Root = () => (
  <Switch>
    <Route exact path={ROUTES.ROOT} component={MainPage} />
    <Route path={ROUTES.BOOK} component={Book} />
  </Switch>
);
