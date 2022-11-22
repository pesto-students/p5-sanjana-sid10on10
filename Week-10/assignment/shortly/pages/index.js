import Head from 'next/head'
import Image from 'next/image'

import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { useState } from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {

  const [url, setUrl] = useState('')
  const [shorturl, setShorturl] = useState('')

  const handleSubmit = async (event)=>{
    event.preventDefault()
    let response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
    setShorturl(response.data.result.full_short_link)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Shortly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Shortly!</a>
        </h1>
        <Box sx={{ display: 'flex', marginTop: '200px' }}>
          <TextField value={url} onChange={(event)=>{
            setUrl(event.target.value)
          }}/>
          <Button variant="contained" sx={{ marginLeft: '40px' }} onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
        <Box sx={{ marginTop: '40px', display: 'flex', border: '1px solid black', padding: '40px', width: '750px' }}>
          <Box sx={{ color: 'red' }}><a href={url}>URL - {url}</a></Box>
          <Box sx={{ color: 'blue', marginLeft: '20px' }}><a href={shorturl}>Short URL - {shorturl}</a></Box>
        </Box>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Pesto Tech'}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
