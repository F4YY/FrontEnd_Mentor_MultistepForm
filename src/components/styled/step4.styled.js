import styled from 'styled-components';
import { Hstack, Vstack } from './multistep.styled';

export const StyledSummary = styled(Vstack)`
    width: 600px;
    height: 460px;
    justify-content: flex-start;
    align-items: flex-start;
    .gap_break1{
        width: 450px;
        padding: 10px 75px;
        background-color: var(--Alabaster);
        border-top: 1px solid var(--Light-gray);
        margin: 0 0 0 85px;
    }
    .gap_break2{
        width: 450px;
        padding: 10px;
        border-radius: 0 0 10px 10px;
        background-color: var(--Alabaster);
        margin: 0 0 0 85px;
    }
    @media screen and (max-width:600px) {
        width: 92%;
        height: auto;
        border-radius: 12px;
        margin: -70px 0;
        padding: 0 20px 20px;
        background-color: var(--White);
        box-shadow: 2px 10px 20px rgba(0, 0, 0, 0.1);
        .gap_break1{
            width: 100%;
            padding: 10px 0;
            margin: 0;
        }
        .gap_break2{
            width: 100%;
            padding: 10px 0;
            margin: 0;
        }
    }
`
export const Description = styled(Hstack)`
    width: 450px;
    height: 78px;
    border-radius: 10px 10px 0 0;
    background-color: var(--Alabaster);
    justify-content: space-between;
    align-items: center;
    padding: 40px 25px;
    margin: 15px 0 0 85px;
    p{
        font-size: 1.02em;
        font-weight: var(--bold);
        color: var(--Marine-blue);
    }
    .justifier{
        width: 100%;
        align-items: flex-start;
    }
    .change{
        font-size: .95em;
        font-weight: var(--regular);
        color: var(--Cool-gray);
        text-decoration: underline;
        cursor: pointer;
        &:hover{
            color: var(--Purplish-blue);
        }
    }
    @media screen and (max-width:600px) {
        width:100%;
        height: auto;
        margin: 27px 0 0;
        padding: 20px;
        .justifier{
            width: 100%;
            align-items: flex-start;
        }
    }
`
export const OnlineDesc = styled(Description)`
    height: auto;
    align-items: center;
    border-radius: 0;
    border-bottom: none;
    padding: 0 25px;
    margin: 0 0 0 85px;
    p{
        font-size: .9em;
        font-weight: var(--regular);
        color: var(--Cool-gray);
    }
    @media screen and (max-width:600px) {
        width:100%;
        margin: 0;
    }
`
export const Total = styled(Description)`
    border-radius: 0 0 10px 10px;
    border-bottom: none;
    background-color: var(--White);
    padding: 25px;
    margin: 0 0 0 85px;
    p{
        font-size: .9em;
        font-weight: var(--regular);
        color: var(--Cool-gray);
    }
    .total{
        font-size: 1.25em;
        font-weight: var(--bold);
        color: var(--Purplish-blue);
    }
    @media screen and (max-width:600px) {
        width:100%;
        height: auto;
        border-radius: 0;
        margin: 0;
    }
`