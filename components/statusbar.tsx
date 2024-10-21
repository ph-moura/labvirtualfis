import styled from 'styled-components'
import Link from 'next/link'
import { Container } from './sharedstyles'

import TogglerButton from '../components/themeToggler'
import useThemeMode from '../scripts/useThemeMode'

const IconBar = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.headerbg};
    color: ${({ theme }) => theme.colors.headerfg};
`

const Icons = styled.div`
    max-width: 1200px;
    background-color: 'red';
    display: flex;
    justify-content: end;
    margin: auto;
    padding: 0.5em 1em;
    gap: 15px;
    img {
        display: block;
        width: 25px;
        border-radius:12px;
    }
`
export default function StatusBar(children) {
    return (
        <IconBar>
            <Icons>
                <TogglerButton {...children} />
            </Icons>
        </IconBar>
    )
}
