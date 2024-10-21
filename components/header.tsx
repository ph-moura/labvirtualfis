import styled from 'styled-components'
import Link from 'next/link'

import { Container } from '../components/sharedstyles'
import StatusBar from '../components/statusbar'

const Header = styled.header`
    background-color: ${({ theme }) => theme.colors.headerbg};
    color: ${({ theme }) => theme.colors.headerfg};
    width:100%;
    padding: 1rem 0;
    min-height: 300px;
    text-align: justify;
    font-weight: 400;
    font-size: 18px;
`

const HeaderTitle = styled.h1`
    color: ${({ theme }) => theme.colors.title};
    padding-bottom: 5px;
    text-transform: uppercase;
`

export default function MyHeader() {
    return (
        <Header>
            <Container>
                <HeaderTitle>Laboratório Virtual de Física</HeaderTitle>
            </Container>
        </Header>
    )
}
