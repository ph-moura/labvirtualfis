import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Title = styled.h2`
    font-weight: 600;
    text-align: justify;
    color: ${({ theme }) => theme.colors.cardtitle};
    padding: 0;
    margin: 0;
`

const Description = styled.p`
    margin: auto;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.cardfg};
`

const Img = styled.img`
    display: block;
    background-color: white;
    margin: auto;
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    aspect-ratio: 1.6;
    margin-bottom: 1em;
    @media (max-width: 480px) {
        width: 100%; 
        margin-bottom: 1em;
    }
`

const CardDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.cardbghover};
    color: ${({ theme }) => theme.colors.cardfghover};
    border-radius: 10px;
    padding: 0.5em;
    max-width: 360px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);

    &:hover {
        text-decoration: none;
        background-color: ${({ theme }) => theme.colors.cardbg};
        color: ${({ theme }) => theme.colors.cardfg};
        ${Title} {
            color: ${({ theme }) => theme.colors.cardtitle};
        }
    }
`

const CardContent = styled.div`
   padding: 0;
`

function MyLink (props) {
    return (
       <Link href={props.href ? props.href : ""}>
          {props.children}
       </Link>
    ) 
}

export default function CardExperiment(props) {
    return (
        <CardDiv>
            <MyLink href={props.href}>
                <Img src={props.img} />
                <CardContent>
                    <Title>{props.title}</Title>
                    <Description>
                        {props.children}
                    </Description>
                </CardContent>
            </MyLink>
        </CardDiv>
    )
}
