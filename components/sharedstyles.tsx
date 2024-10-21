import styled from 'styled-components'

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0 1em;
`

const Main = styled.main`
    color: ${({ theme }) => theme.colors.foreground};
    padding: 0;
    text-align: justify;
    font-size: 13pt;
    min-height: 100vh;
`

const CodeTag = styled.code`
    background: #fafafa;
    border-radius: 5px;
    margin: 0 0.75rem;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
`

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.title};
    border-bottom: 3px solid;
    border-color: ${({ theme }) => theme.colors.title};
    text-transform: uppercase;
    padding-bottom: 5px;
`

const ControlPanel = styled.div`
    color: ${({ theme }) => theme.colors.cardfg};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 820px;
    margin: 0 auto  0 0;
    @media (max-width: 580px) {
        flex-direction: column;
    }
`

const Canvas = styled.canvas`
    background-color: ${({ theme }) => theme.colors.canvasbg};
    padding: 0;
    display: flex;
    flex-direction: row;
    width:100%;
    max-width: 680px;
    image-rendering: auto;
    border-radius: 5px;
    margin: auto 0;
    border: solid black 2px;

`
const ExpCard = styled.div`
    display: block grid;
    margin: auto; 
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    width:100%;
    gap: 5px;
`

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding:auto;
    margin: 50px auto;
    @media (max-width: 680px) {
        flex-direction: column;
    }
`;

export { ExpCard, ChartWrapper, Container, ControlPanel, Main, CodeTag, Title, Canvas }
