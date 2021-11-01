import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import { useSelector, shallowEqual } from 'react-redux';
// import {isMobile} from 'react-device-detect';

import { ToastProvider } from 'react-toast-notifications'
import loadable from '@loadable/component'
import paths from './paths'
import PrivateRoute from './PRoute_2';
// import Modal from "../components/Items/modal"
// import { cleanError } from '../state/actions/auth'
// import { clearUsers } from '../../state/actions/users'
// import { clearDashboard } from '../../state/actions/dashboard'
// import VerifyAlert from "../components/Items/verifyAlert"
// import {defaultHomeTemplate} from "../Settings"
// import {useIntl} from 'react-intl';

const RouterComponent = () => {
  // const { id} = useSelector(
  //   state => ({
  //     id: state.auth.userData.docId
  //   }),
  //   shallowEqual
  // );

  let Dashboard_1,Block, Dashboard_2,Dashboard_3,Discovery,Dashboard_mobile_3,Search_3,Profile_3,Profile_Edit_3_1,Profile_Edit_3_2,Profile_Edit_3_3,Settings_3,Match_3,Favs_3,Views,Friends,Premium_3,Step2_3,Vorkasse_3,Verify,Home1
  // const intl = useIntl();
  // const {error } = useSelector(
  //   (state) => ({
  //     // general: state.generalDataReducer.general,
  //     // site: state.generalDataReducer.site,
  //     // length: state.generalDataReducer.length,
  //     error: state.auth.error
  //   }), shallowEqual
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
    // dispatch(clearDashboard())
    // dispatch(clearUsers())
  // }, []);

  // clearDashboard
  // if (!general || !site || !length){
  //   return null
  // }
  // console.log("mainRender")
  // console.log(error)

  Verify = loadable(() => import('../pages/Verify'))
      // import Dashboard_1 from '../pages/Dashboard_2/Dashboard/Dashboard';
      Dashboard_2 = loadable(() => import('../pages/Dashboard_2/Dashboard/Dashboard_2'))
      Dashboard_3 = loadable(() => import('../pages/Dashboard_2/Dashboard/Dashboard_3'))
      Discovery = loadable(() => import('../pages/Dashboard_2/Discovery/Index'))
      Search_3 = loadable(() => import('../pages/Dashboard_2/Search/Search'))
      Profile_3 = loadable(() => import('../pages/Dashboard_2/Profile/Index'))
      Profile_Edit_3_1 = loadable(() => import('../pages/Dashboard_2/Profile/Edit_1'))
      Profile_Edit_3_2 = loadable(() => import('../pages/Dashboard_2/Profile/Edit_2'))
      Profile_Edit_3_3 = loadable(() => import('../pages/Dashboard_2/Profile/Edit_3'))
      Settings_3 = loadable(() => import('../pages/Dashboard_2/Profile/Settings'))
      Match_3 = loadable(() => import('../pages/Dashboard_2/Match/Index'))
      Favs_3 = loadable(() => import('../pages/Dashboard_2/Favs/Index'))
      Views = loadable(() => import('../pages/Dashboard_2/Views/Index'))
      Friends = loadable(() => import('../pages/Dashboard_2/Friends/Index'))
      Premium_3 = loadable(() => import('../pages/Dashboard_2/Premium/Index'))
      Step2_3 = loadable(() => import('../pages/Dashboard_2/Premium/Step2'))
      Vorkasse_3 = loadable(() => import('../pages/Dashboard_2/Premium/Vorkasse'))
      Block = loadable(() => import('../pages/Dashboard_2/Block/Index'))
      if(window.innerWidth < 991){
        Dashboard_mobile_3 = loadable(() => import('../pages/Dashboard_2/Dashboard/Mobile'))

      }else{

      Dashboard_1 = loadable(() => import('../pages/Dashboard_2/Dashboard/Dashboard'))
      }
      Home1 = loadable(() => import('../pages/Template_1/Index'))
  return (
    <BrowserRouter>
      <ToastProvider>
        <Switch>
        <Route path={paths.BLOCK} component={Block} />
        <Route path={paths.VERIFY} component={Verify} />
        <PrivateRoute path={paths.DISCOVERY} component={Discovery} />
        <PrivateRoute path={paths.MODIFY_USER} component={Profile_3} />
        <PrivateRoute path={paths.MATCH} component={Match_3} />
        <PrivateRoute path={paths.FAVS} component={Favs_3} />
        <PrivateRoute path={paths.PREMIUM} component={Premium_3} />
        <PrivateRoute path={paths.STEP_2} component={Step2_3} />
        <PrivateRoute path={paths.STEP_3} component={(window.innerWidth < 991) ? Dashboard_mobile_3 : Dashboard_1} />
        {/* <PrivateRoute path={paths.VIP} component={Vip_3} /> */}
        <PrivateRoute path={paths.VORKASSE} component={Vorkasse_3} />
        <PrivateRoute path={paths.PROFILE_EDIT_1} component={Profile_Edit_3_1} />
        <PrivateRoute path={paths.PROFILE_EDIT_2} component={Profile_Edit_3_2} />
        <PrivateRoute path={paths.PROFILE_EDIT_3} component={Profile_Edit_3_3} />
        <PrivateRoute path={paths.SETTINGS} component={Settings_3} />
        <PrivateRoute path={paths.DASHBOARD} component={(window.innerWidth < 991) ? Dashboard_mobile_3 : Dashboard_1} />
        <PrivateRoute path="/online-users" component={Dashboard_3} />
        <PrivateRoute path="/last-users" component={Dashboard_2} />
        <PrivateRoute path={paths.SEARCH} component={Search_3} />
        <PrivateRoute path={paths.VIEWS} component={Views} />
        <PrivateRoute path={paths.FRIENDS} component={Friends} />
        {/* <PrivateRoute path={paths.ROOT} component={(window.innerWidth < 991) ? Dashboard_mobile_3 : Dashboard_1} /> */}
        {/* <PrivateRoute component={(window.innerWidth < 991) ? Dashboard_mobile_3 : Dashboard_1} /> */}
        <Route path={paths.ROOT} component={Home1} />
        <Route component={Home1} />
      </Switch>
      
      </ToastProvider>
    </BrowserRouter>
  );
};

export default RouterComponent;
