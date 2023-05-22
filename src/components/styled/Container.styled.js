import styled from 'styled-components';

export const Container = styled.div`
    //Primary color:
    --Marine-blue: hsl(213, 96%, 18%);
    --Purplish-blue: hsl(243, 100%, 62%);
    --Pastel-blue: hsl(228, 100%, 84%);
    --Light-blue: hsl(206, 94%, 87%);
    --Strawberry-red: hsl(354, 84%, 57%);
    //Neutral color:
    --Cool-gray: hsl(231, 11%, 63%);
    --Light-gray: hsl(229, 24%, 87%);
    --Magnolia: hsl(217, 100%, 97%);
    --Alabaster: hsl(231, 100%, 99%);
    --White: hsl(0, 0%, 100%);
    //Font:
    font-size: 16px;
    font-family: 'Ubuntu', sans-serif;
    --regular: 400;
    --medium: 500;
    --bold: 700;
    display: flex;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: var(--Magnolia);
    .active{
        border-color: var(--Light-blue);
        background-color: var(--Light-blue);
        transition: all .5s ease-in-out;
        p{
            font-weight: var(--bold);
            color: var(--Marine-blue);
        }
    }
    .inactive{
        background-color: var(--Purplish-blue);
        transition: all .5s ease-in-out;
        p{
            font-weight: var(--regular);
            color: var(--White);
        }
    }
    .active_plan{
        border-color: var(--Marine-blue);
        background-color: var(--Alabaster);
        transition: all .5s ease-in-out;
    }
    .inactive_plan{
        background-color: var(--White);
        transition: all .5s ease-in-out;
    }
    .active_addons{
        border-color: var(--Marine-blue);
        background-color: var(--Alabaster);
        transition: all .5s ease-in-out;
    }
    .inactive_addons{
        background-color: var(--White);
        transition: all .5s ease-in-out;
    }
    @media screen and (max-width:1025px) {
        width: 100%;
        margin: 0 20px;
    }
    @media screen and (max-width:600px) {
        width: auto;
        align-items: flex-start;
    }
`
