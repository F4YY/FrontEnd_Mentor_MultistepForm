import styled from 'styled-components';
import { Hstack, Vstack } from './multistep.styled';

export const PickAddons = styled(Vstack)`
    width: 600px;
    height: 460px;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width:600px) {
        width: 92%;
        height: auto;
        border-radius: 12px;
        margin: -70px 0;
        padding: 0 20px 20px;
        background-color: var(--White);
    }
`
export const StyledAddons = styled(Hstack)`
    width: 450px;
    height: 78px;
    border-radius: 10px;
    border: 1px solid var(--Light-gray);
    background-color: var(--White);
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    margin: 15px 0 0 90px;
    input{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: flex;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        border: 1px solid var(--Light-gray);
        justify-content: center;
        align-items: center;
    }
    input:checked {
        color: var(--White);
        background-color: var(--Purplish-blue);
    }
    input:checked::before {
        content: "✔";
        font-size: .9em;
        color: var(--White);
    }
    .spreader{
        width: 280px;
        align-items: flex-start;
    }
    .addon_title{
        font-size: 1.02em;
        font-weight: var(--bold);
        color: var(--Marine-blue);
    }
    .addon_subtitle{
        font-size: .95em;
        font-weight: var(--regular);
        color: var(--Cool-gray);
    }
    .addon_price{
        font-size: .95em;
        font-weight: var(--regular);
        color: var(--Purplish-blue);
    }
    &:hover{
        border-color: var(--Marine-blue);
    }
    &:active{
        border-color: var(--Purplish-blue);
    }
    @media screen and (max-width:600px) {
        width: 100%;
        height: auto;
        padding: 10px 12px;
        margin: 27px 0 0;
        input{
            width: 24px;
            height: 18px;
            padding: 10px;
        }
        .spreader{
            width: 100%;
            margin: 0 0 0 12px;
        }
        .addon_title{
            font-size: .95em;
            letter-spacing: .01em;
        }
        .addon_subtitle{
            font-size: .85em;
            letter-spacing: .01em;
        }
        .addon_price{
            font-size: .85em;
        }
    }
`