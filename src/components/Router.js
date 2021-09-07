import React, { PureComponent } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {List ,AddDevice, EditDevices} from '../views';

import '../sass/App.scss';

class Rooter extends PureComponent {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route  path='/devices/edit/:id' component={EditDevices} />
            <Route exact path='/devices/add' component={AddDevice} />
            <Route exact path='/' component={List} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Rooter;
