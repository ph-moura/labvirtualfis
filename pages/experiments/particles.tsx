import Head from 'next/head'
import { Container, ControlPanel, Main, Title, CodeTag } from '../../components/sharedstyles'

import React from 'react';
import ReactDOM from 'react-dom/client';
import Particles from './src/Particles';

export default function Experiments() {
  return (
  <>
      <Head>
        <title>Atrito Estático</title>
        <meta name="Experimentos" content="Experimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
          <Title>Determinação do coeficiente de atrito estático entre um bloco e uma superfície</Title>
          <h2>Roteiro do experimento</h2>
          <li>Variar a massa do bloco mantendo o ângulo fixo.</li>
          <li>Variar o ângulo mantendo uma massa fixa.</li>
          <Particles/>
          <h3>O que pode-se concluir do experimento acima?</h3>
          <h2>Explicação teórica</h2>
      </Main>
 </> 
  )
}
