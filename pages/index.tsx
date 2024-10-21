import Head from 'next/head'
import { Container, Main, Title, CodeTag } from '../components/sharedstyles'

export default function Home() {
    return (
        <>
            <Head>
                <title>Laboratório Virtual de Física</title>
                <meta name="Laboratório Virtual de Física" content="Laboratório Virtual de Física" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                <Title>Início</Title>
                <p>Bem-vindo ao Laboratório Virtual de Física.</p>
<ol><li><b>Explore o Mundo da Física de forma interativa!</b></li>
Oferecemos uma experiência única e inovadora para o aprendizado da Física. Nossa plataforma permite que estudantes de todos os níveis realizem experimentos virtuais de forma interativa e envolvente, utilizando ferramentas e equipamentos científicos recriados digitalmente.

<li><b>Experimentos Virtuais</b></li>
Aqui, você pode simular uma variedade de experimentos, desde os mais básicos até os mais complexos, com a conveniência e a flexibilidade do ambiente online. Nossa coleção de experimentos cobre diversos tópicos da Física, como mecânica, termodinâmica, eletromagnetismo e óptica.

<li><b>Ferramentas Interativas</b></li>
Utilize nossos instrumentos virtuais, como transferidores, cronômetros, balanças e mais, para realizar medições precisas. Variações em grandezas físicas podem ser facilmente ajustadas para observar os diferentes resultados e comportamentos dos sistemas estudados.

<li><b>Análise de Dados</b></li>
Após realizar os experimentos, você pode inserir os dados coletados em nossas tabelas interativas e criar gráficos para analisar os resultados. Nossa plataforma oferece todas as ferramentas necessárias para que você possa calcular e descobrir diversas grandezas físicas, como a aceleração da gravidade, resistência elétrica, entre outras.
</ol>
        </Main>
        </> 
    )
}
