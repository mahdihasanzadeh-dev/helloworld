import React from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PostList from "./post-lists";
import PostDetail from "./post-detail";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
const router = (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="posts" element={<PostList />} />
      <Route path="/posts/:postId" element={<PostDetail />}  />
    </Route>
  </Routes>
</BrowserRouter>
)
if (rootElement.hasChildNodes()) {
  hydrate(router, rootElement);
} else {
  render(router, rootElement);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
