import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage'
import PageNotFound from './pages/PageNotFound';
import AboutPage from './pages/AboutPage';
import TopOfCountry from './pages/TopOfCountry';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="top/:countrycode/" element={<TopOfCountry />} />
            <Route path="about/" element={<AboutPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App