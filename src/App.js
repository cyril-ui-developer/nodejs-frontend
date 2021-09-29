import React from 'react';
import './App.css';
import PostInput from './components/PostInput'
import PostList from './components/PostList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <Container>
      <Row>
        <Container>
          <PostInput/>
        </Container>
      </Row>
      <div className="separator"/>
      <h1> List Post </h1>
      <Row>
        <PostList/>
      </Row>
    </Container>
  );
}

export default App;

