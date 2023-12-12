import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/Error_boundaries/Error_boundaries';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <ErrorBoundary>
        <Navigation />
        <Header />
        </ErrorBoundary>
        </React.StrictMode>
        <Main />
        <Aside />
        <Footer />
    </div>
  );
}

export default App;
