import React from 'react';
import loadable from '@loadable/component'
const Router2 = loadable(() => import('./Index_2'))

const App = () =>{
  return(<Router2 />)
} ;
export default App