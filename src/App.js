import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./ui/home/Index"
// import { useSelector, shallowEqual } from 'react-redux';
// import {isMobile} from 'react-device-detect';

// import { ToastProvider } from 'react-toast-notifications'
// import paths from './paths'
// import Modal from "../components/Items/modal"
// import { cleanError } from '../state/actions/auth'
// import { clearUsers } from '../../state/actions/users'
// import { clearDashboard } from '../../state/actions/dashboard'
// import VerifyAlert from "../components/Items/verifyAlert"
// import {defaultHomeTemplate} from "../Settings"
// import {useIntl} from 'react-intl';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      {/* <ToastProvider> */}
        <Switch>
        <Route path="/" component={Home} />
        <Route component={Home} />
      </Switch>
      
      {/* </ToastProvider> */}
    </BrowserRouter>
  );
};

export default RouterComponent;
