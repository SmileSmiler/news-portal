import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import { NewsDetail } from '../pages/NewsList/NewsDetail/NewsDetail';
import { NewsList } from '../pages/NewsList/NewsList';

export const MainRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact
          path="/"
          element={<NewsList/>} />
        {/* <Route
          path="/:id"
          element={<NewsDetail/>} /> */}
        {/* <Route path="*" element={<NotFoundPage/>} /> */}
      </Routes>
    </HashRouter>
  )
}