import { Main, Title } from '../components/sharedstyles';
import { ExpCard }from '../components/sharedstyles';
import CardExperiment from '../components/card_experiment';
import ReactDOM from 'react-dom/client';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Experiments() {
    return (
        <>
            <Head>
                <title>Experimentos</title>
                <meta name="Experimentos" content="Experimentos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Title>Experimentos</Title>
                <ExpCard>
                    <CardExperiment title="Atrito Estático" href={'./experiments/static_friction'} img={'images/friction3.png'}>
                        Estudo da força de atrito estático entre um bloco e uma superfície de um plano inclinado.
                    </CardExperiment>
                    <CardExperiment title="Lançamento de projétil" href={'./experiments/projectile'} img={'images/projectile.png'}>
                        Estudo do movimento de um projétil sujeito ao campo gravitacional.
                    </CardExperiment>
                    <CardExperiment title="Colisões">
                        Estudo das colisões elásticas em uma dimensão.
                    </CardExperiment>
                </ExpCard>
            </Main>
        </> 
    )
}
