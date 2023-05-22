import styled from 'styled-components';
import { Hstack, Vstack, Vstackflexi } from './multistep.styled';

export const SelectPlan = styled(Vstack)`
    width: 600px;
    height: 460px;
    justify-content: flex-start;
    align-items: flex-start;
    p{
        margin:3px 0;
    }
    .plan{
        font-size: .95em;
        font-weight: var(--bold);
        color: var(--Marine-blue);
        margin: 40px 0 0;
    }
    .duration{
        font-size: .9em;
        font-weight: var(--medium);
        color: var(--Cool-gray);
    }
    .bonus{
        font-size: .79em;
        font-weight: var(--medium);
        color: var(--Marine-blue);
    }
    .horizontal-align{
        width: 450px;
        justify-content: space-between;
        align-items: flex-end;
        margin: 0 0 0 85px;
    }
    .Spreader{
        width: auto;
        gap:15px;
        margin: 0 0 0 85px;
    }
    @media screen and (max-width:1025px) {
        width: 100%;
    }
    @media screen and (max-width:600px) {
        width: 92%;
        height: auto;
        border-radius: 12px;
        margin: -70px 0;
        padding: 0 20px 20px;
        background-color: var(--White);
        .plan{
            margin: 0;
        }
        .duration{
            margin: 5px 0 0 0;
        }
        .bonus{
            margin: 5px 0 0 0;
        }
        .horizontal-align{
            width: 100%;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 0;
        }
        .Spreader{
            width: 100%;
            margin: 0;
        }
    }
`
export const StyledPlan = styled(Vstackflexi)`
    width: 140px;
    height: auto;
    border-radius: 10px;
    border: 1px solid var(--Light-gray);
    background-color: var(--White);
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
    padding: 20px 15px 5px;
    margin: 27px 0 0;
    @media screen and (max-width:600px) {
        width: 100%;
        height: auto;
        padding: 15px;
        margin: 0;
        &:first-child{
            margin:27px 0 0;
        }
        .mobile_justify{
            align-items: flex-start;
            padding: 0 0 0 15px;
        }
    }
`
export const StyledFormLabel = styled(Hstack)`
    width: 450px;
    height: 80px;
    color: var(--Marine-blue);
    justify-content: center;
    border-radius: 8px;
    background-color: var(--Alabaster);
    padding: 20px auto;
    margin: 20px 0 0 85px;
    p{
        font-size: .85em;
        font-weight: var(--bold);
    }
    .monthly_inactive{
        color: var(--Cool-gray);
    }
    .yearly_inactive{
        color: var(--Cool-gray);
    }
    @media screen and (max-width:600px) {
        width: 100%;
        height: 50px;
        margin: 20px 0 0 0;
    }
`