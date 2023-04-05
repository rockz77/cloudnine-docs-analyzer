import React from 'react'
import FolderSelector from './pages/FolderSelector'
import NavBar from './layout/NavBar'
import Container from '@mui/material/Container';
import './App.css'

declare module 'react' {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    directory?: string;
    webkitdirectory?: string;
  }
}

function App() {
  return (
    <Container maxWidth="lg">
        <NavBar />
        <FolderSelector />
    </Container>
  )
}

export default App
