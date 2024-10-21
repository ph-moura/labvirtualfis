import styled from 'styled-components'

const Footer = styled.footer`
    width:100%;
    overflow: hide;
    padding: 5rem 0;
    background-color: ${({ theme }) => theme.colors.footerbg};
    color: ${({ theme }) => theme.colors.footerfg};
    bottom: 0;
    margin: 0;
    text-align: center;
    font-size: 14pt;
    height: 50vh;
`

export default function MyFooter() {
    return(
        <Footer> 
          Developed by Paulo Henrique de Moura
        </Footer>
    )
}
