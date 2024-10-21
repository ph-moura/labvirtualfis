import Head from 'next/head'
import { Container, ControlPanel, Main, Title, CodeTag } from '../../components/sharedstyles'

import React from 'react';
import ReactDOM from 'react-dom/client';
import PlanoInclinado from './src/PlanoInclinado';

export default function Experiments() {
  return (
  <>
      <Head>
        <title>Atrito Estático</title>
        <meta name="Experimentos" content="Experimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
          <Title>Atrito Estático</Title>
          <h2>Para você refletir</h2>
          <p>Suponha que você coloque dois blocos de mesmo material, porém de massas diferenters,  sob uma rampa e comece a almentar sua inclinação. Qual vai começar a deslizar primeiro? Ou os dois deslizarão no mesmo instante? Qual fator é determinante nesta questão?</p>
          <h2>Objetivos</h2>
          <p>Determinação do coeficiente de atrito estático entre um bloco e uma superfície. </p>

          <h2>Roteiro do experimento</h2>
          <li>Variar a massa do bloco mantendo o ângulo fixo.</li>
          <li>Variar o ângulo, mantendo uma massa fixa, até que o bloco comece a se deslocar.</li>
       
          <PlanoInclinado/>
          <h2>Discussão</h2>
          <p>O que pode-se concluir do experimento acima?</p>
          
          <h2>Explicação teórica</h2>
          <p> </p>
      </Main>
 </> 
  )
}
