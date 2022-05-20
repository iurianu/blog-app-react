import React from "react"
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <main className="Home">

      <Helmet>
        <html lang='en' />
        <title>Homepage</title>          
        <link rel="stylesheet" href="./../lib/styles/home.css" />
      </Helmet>

      <h1>
        <span className="text">
          <span>iurianu </span>
          <span>rocks</span>
        </span>           
      </h1>
    </main>
  )
}