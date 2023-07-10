import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainScreen } from '../app/pages/mainScreen/MainScreen';

const AppRoot = (props: any) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainScreen />} />
      {/* <Route path="/result" component={ResultScreen} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoot;
