import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./index.scss";
const TetrisApp = React.lazy(() => import('tetris/App'))
const MagicApp = React.lazy(() => import('mtgc/App'))

const Home = () => (
    <div className="max-w-6xl mx-auto mt-10">
      <div>Name: swaff-site-host</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
    </div>
);

const App = () => (
  <BrowserRouter>
    <nav>
      <Link className="mx-4 text-blue-500 underline" to="/" >Home</Link>
      <Link className="mx-4 text-blue-500 underline" to="/tetris" >Tetris</Link>
      <Link className="mx-4 text-blue-500 underline" to="/magic" >Magic</Link>
      <Link className="mx-4 text-blue-500 underline" to="/blog" >Blog</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tetris" element={
        <React.Suspense fallback='Loading Tetris...'>
          <TetrisApp />
        </React.Suspense>} 
      />
      <Route path="/magic" element={
        <React.Suspense fallback='Loading Magic...'>
          <MagicApp />
        </React.Suspense>} 
      />
      <Route path="/blog" element={<div><h1>Blog</h1><p>Hello blog</p></div>} />
    </Routes>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById("app"));
