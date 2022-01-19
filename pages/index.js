import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import BlogButton from '../components/BlogButton';
import BlogForm from '../components/blogform';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function Home() {

  const[open, setOpen] = useState(false);

  function handleClick(){
    setOpen(!open);
    console.log("clicked");
  }

  function handleClose(){
    setOpen(false);
  }

  return (
    <>
      <Navbar setOpen = {handleClick}/>
      {open && <Modal setClose = {handleClose}/>}
  
    </>

  );
}
