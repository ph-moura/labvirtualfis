import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      headerfg: string
      headerbg: string
      navbg: string
      navfg: string
      navabg: string
      navafg: string
      navabghover: string
      navafghover: string
      navabgactive: string
      navafgactive: string
      background: string
      foreground: string
      title: string
      canvasbg: string
      cardbg: string
      cardfg: string
      cardtitle: string
      carddate: string
      cardbghover: string
      cardfghover: string
      cardtitlehover: string
      carddatehover: string
      footerbg: string
      footerfg: string
    }
  }
}
