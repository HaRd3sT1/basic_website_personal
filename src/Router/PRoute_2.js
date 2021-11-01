import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import paths from './paths';
// import Layout from "../../components/Layout/Layout"
import Layout_2 from "../components/Layout/Layout_2"
import UserProfile from "../pages/Dashboard_2/UserProfile/Index"
// import Layout_3 from "../../components/Layout/Layout_3"

const PrivateRoute = ({ path, component: Component }) => {
  const { auth} = useSelector(
    state => ({
      auth: state.auth
    }),
    shallowEqual
  );


  const dispatch = useDispatch();
  useEffect(() => {
    // var __url_string = window.location.href;
    // var __url = new URL(__url_string);
    // let ref = __url.searchParams.get("ref") ? __url.searchParams.get("ref") : ""

    // console.log(__url)
    
  }, [dispatch]);
  // return (
  //     <Route
  //       exact
  //       path={path}
  //     render={() => (<Layout_2><Component /></Layout_2>)}
  //     />
  // );
  return (
      <Route
        exact
        path={path}
      render={() => (auth.ipBlock ? <Redirect to={paths.BLOCK} /> : auth.userData.docId ? <Layout_2><Component /></Layout_2> : path === "/users/:id" ? <UserProfile /> : <Redirect to={paths.ROOT} />)}
      />
  );
};

PrivateRoute.propType = {
  path: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired
};

export default PrivateRoute;
