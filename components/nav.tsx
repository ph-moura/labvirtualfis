import styled from 'styled-components'
import Link from 'next/link'
import { Container } from './sharedstyles'
import { usePathname} from 'next/navigation';

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    font-weight: 400;

    a {
        list-style: none;
        display: block;
        width: 115px;
        text-align: center;
        background-color: ${({ theme }) => theme.colors.navabg};
        color: ${({ theme }) => theme.colors.navafg};
        padding: 0.125rem 0;
        border-radius: 10px;
    }

    a:hover {
        background-color: ${({ theme }) => theme.colors.navabghover};
        color: ${({ theme }) => theme.colors.navafghover};
        transition: 0.3s;
    }

    a.active {
        background-color: ${({ theme }) => theme.colors.navabgactive};
        color: ${({ theme }) => theme.colors.navafgactive};
    }
}
`

const Bar = styled.div `
    background-color: ${({ theme }) => theme.colors.navbg};
    color: ${({ theme }) => theme.colors.navfg};
    position: sticky;
    width: 100%;
    top: 0;
    padding: 0;
    margin: 0;
` 

const BarContent = styled.div`
    color: ${({ theme }) => theme.colors.navbg};
    max-width: 1200px;
    margin: auto;
    padding: 0.25em 1em;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 500px) {
        flex-direction: column;
    }
`

const Title = styled.div`
    color: ${({ theme }) => theme.colors.navfg};
    text-align: center;
    width: auto;
    font-size: 120%;
    margin: auto 0;
    overflow: hidden;
`

function MyLink (props) {
    const pathname = usePathname();
    return (
       <Link href={props.href} className={pathname == props.href ? "active" : ""}>
          {props.children}
       </Link>
    ) 
}

export default function NavBar(children) {
    return (
        <Bar>
            <BarContent>
                <Title></Title>
                <Nav>
                    <MyLink href="/">Início</MyLink>
                    <MyLink href="/experiments">Experimentos</MyLink>
                </Nav>
            </BarContent>
        </Bar>      
    )
}
