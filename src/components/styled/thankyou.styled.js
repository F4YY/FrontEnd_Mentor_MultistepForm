import styled from 'styled-components';
import { Vstack } from './multistep.styled';

export const StyledThankyou = styled(Vstack)`
    width: 600px;
    height: 100%;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 2em;
        font-weight: var(--bold);
        color: var(--Marine-blue);
        margin: 20px auto 10px;
    }
    h2{
        font-size: 1em;
        font-weight: var(--regular);
        text-align: center;
        color: var(--Cool-gray);
        margin: 0 85px;
    }
    @media screen and (max-width:600px) {
        width: 92%;
        height: auto;
        border-radius: 12px;
        padding: 50px 34px;
        margin: -70px 0 0;
        background-color: var(--White);
        h1{
            font-size: 1.5em;
            margin: 20px 0 10px;
        }
        h2{
            font-size: .95em;
            margin: 0 0 10px;
        }
    }
`