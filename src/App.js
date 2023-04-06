import React from "react";
import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"

import { Homepage } from "./pages/Homepage";
import { Blogpage } from "./pages/Blogpage";
import { Singlepage } from "./pages/Singlepage";
import { Aboutpage } from "./pages/Aboutpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Layout } from "./components/Layout";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<Homepage />} />
                  <Route path="posts" element={<Blogpage />} />
                  <Route path="posts/:id" element={<Singlepage />}/>
                  {/* Вложенный роутинг ------------------------------------*/}
                  <Route path="about/*" element={<Aboutpage />} >
                        <Route path="contacts" element={<p>Наши контакты</p>} />
                        <Route path="team" element={<p>Наша команда</p>} />
                  </Route>  
                  {/* ----------------------------------------------------- */}
                  <Route path="about-us" element={<Navigate to='/about' replace/>} />
                  <Route path="*" element={<Notfoundpage />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
