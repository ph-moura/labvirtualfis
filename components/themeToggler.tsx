import { ThemeProvider, DefaultTheme } from 'styled-components'
import useThemeMode from '../scripts/useThemeMode'

import { HiMoon } from 'react-icons/hi';
import { FaSun } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
    margin: auto;
    padding: 0;
`

const ToggleSwitch = styled.div`
    background-color: ${({ theme }) => theme.colors.headerbg};
    .switch {
        position: relative;
        display: inline-block;
        width: 3rem;
        height: 1.25rem;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding-top: 0.2rem;
        background-color: ${({ theme }) => theme.colors.headerfg};
        color: ${({ theme }) => theme.colors.headerbg};
        -webkit-transition: .2s;
        transition: .2s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 1.25rem;
        width: 1.25rem;
        left: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.headerfg};
        -webkit-transition: .2s;
        transition: .2s;
    }

    input:checked + .slider {
        background-color: ${({ theme }) => theme.colors.headerfg};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(1.75rem);
        -ms-transform: translateX(1.75rem);
        transform: translateX(1.75rem);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 2rem;
    }

    .slider.round:before {
        border-radius: 50%;
    }
`

const Icons = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    align-items: center;
    svg {
        color: ${({ theme }) => theme.colors.headerbg};
        z-index: 11;
    }
`

interface ThemeTogglerProps {
  themeToggler: () => void;
}

export default function TogglerButton({ themeToggler }: ThemeTogglerProps) {
    return (
        <ToggleSwitch>
            <Container>
                <label htmlFor="checkbox" className="switch">
                    <input
                        id="checkbox"
                        type="checkbox"
                        onClick={themeToggler}
                        onChange={ () => false }
                    />
                    <Icons className="slider round">
                    <HiMoon style={{ marginLeft: '0.25rem', height: '0.85rem' }} /> 
                    <FaSun size={0} style={{ marginLeft: '0.75rem', height: '0.85rem'}} />
                    </Icons>
                </label>
            </Container>
        </ToggleSwitch>
    );
}
