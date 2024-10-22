import Head from 'next/head'
import { Container, ControlPanel, Main, Title, CodeTag } from '../../components/sharedstyles'

import React from 'react';
import ReactDOM from 'react-dom/client';
import Projectile from './src/Projectile';

export default function Experiments() {
  return (
  <>
      <Head>
        <title>Lançamento de Projétil</title>
        <meta name="Experimentos" content="Experimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
          <Title>Estudo do movimento sob ação do campo gravitacional: lançamento de projétil.</Title>
          <h2>Para você refletir</h2>
          <p> </p>
          <h2>Roteiro do experimento</h2>
          <li>Variar a velocidade mantendo o ângulo fixo.</li>
          <li>Variar o ângulo mantendo a velocidade fixa.</li>
          <li>Para ambos os casos acima: qual o alcance do projétil?</li>
          <Projectile/>
          <h3>O que pode-se concluir do experimento acima?</h3>
          <h2>Explicação teórica</h2>
      </Main>
 </> 
  )
}
