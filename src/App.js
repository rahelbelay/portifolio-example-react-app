import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Nav from './Nav';

const content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat voluptas numquam ut, corrupti doloribus perspiciatis nostrum. Facilis adipisci molestias commodi veniam, suscipit deleniti. Temporibus delectus ab molestiae laborum totam?`

const title = `Amazing Web Developer`

const linkNames = [
  'Home',
  'Portifolio',
  'cat Picture',
  'Contact',
]

function App() {
  return (
    <div className="container-fluid">
      <Header
        title={title}
      />
      <Nav
        linkNames={linkNames}
      />
      <Main
        content={content}
      />

      <Footer />
    </div>

  );
}

export default App;
