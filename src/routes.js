import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import NotFound from './pages/Not-found';

import Header from './components/Header';

const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path='/filme/:id' component={Filme} />
                <Route exact={true} path='/favoritos' component={Favoritos} />
                < Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;