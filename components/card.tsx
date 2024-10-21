import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-weight: 600;
    text-align: justify;
    color: ${({ theme }) => theme.colors.cardtitle};
    padding: 0;
    margin: 0;
`

const Date = styled.div`
    color: ${({ theme }) => theme.colors.carddate};
    margin: 6px 0;
    font-weight: 600;
`

const Description = styled.p`
    margin: auto;
    font-size: 18px;
    font-weight: 400;
`

const Img = styled.img`
    display: block;
    background-color: white;
    margin: auto;
    width: 20%;
    aspect-ratio: 210/297;
    @media (max-width: 480px) {
        width: 100%; 
        margin-bottom: 1em;
    }
`

const CardDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.cardbg};
    color: ${({ theme }) => theme.colors.cardfg};
    border-radius: 10px;
    padding: 1rem;
    margin: 40px 0;
    display: flex;
    flex-direction: row;

    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 480px) {
        flex-direction: column;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.cardbghover};
        color: ${({ theme }) => theme.colors.cardfghover};
        ${Title} {
            color: ${({ theme }) => theme.colors.cardtitlehover};
        }
        ${Date} {
            color: ${({ theme }) => theme.colors.carddatehover};
        }
    }
`

const CardContent = styled.div`
    padding-left: 1rem;
    width: 80%;

    @media (max-width: 480px) {
       width: 100%; 
       padding: 0;
    }
`

export default function Card(props) {
return (
  <CardDiv>
    <Img src={props.img} />
    <CardContent>
    <Title>{props.title}</Title>
    <Date>{props.date}</Date>
    <Description>
        {props.children}
    </Description>
    </CardContent>
  </CardDiv>
  )
}
