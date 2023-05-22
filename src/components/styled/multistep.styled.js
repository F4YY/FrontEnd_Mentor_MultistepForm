import styled from 'styled-components';
import bgsidebardesktop from '../assets/images/bg-sidebar-desktop.svg';
import bgheadermobile from '../assets/images/bg-sidebar-mobile.svg';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Vstackflexi = styled(Vstack)`
    @media screen and (max-width: 600px) {
        flex-direction: row;
    }
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Hstackflexi = styled(Hstack)`
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
export const Styledmultistep = styled(Hstackflexi)`
    display: flex;
    width: 920px;
    height: 570px;
    justify-content: flex-start;
    padding: 20px;
    border-radius: 15px;
    background-color: var(--White);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
    h1{
        font-size: 2em;
        font-weight: var(--bold);
        color: var(--Marine-blue);
        margin: 30px 0 0 85px;
        @media screen and (max-width:600px) {
            font-size: 1.5em;
            margin: 25px 0 0 0;
        }
    }
    h2{
        font-size: 1em;
        font-weight: var(--regular);
        color: var(--Cool-gray);
        margin: 0 0 10px 85px;
        @media screen and (max-width:600px) {
            margin: 0 20px 0 0;
        }
    }
    .firstbtnSpreader{
        width: 600px;
        height: 70px;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
    }
    .btnSpreader{
        width: 600px;
        height: 70px;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
    }
    @media screen and (max-width:1025px) {
        width: 800px;
    }
    @media screen and (max-width:600px) {
        width: 100%;
        height: auto;
        border-radius: 0;
        flex-direction: column;
        justify-content: flex-start;
        background-color: var(--Magnolia);
        padding: 0;
        .firstbtnSpreader{
            width: 100%;
            height: auto;
            padding:0 20px;
        }
        .btnSpreader{
            width: 100%;
            height: auto;
            padding:20px;
            background-color: var(--White);
        }
    }
`
export const Sidebar = styled(Vstackflexi)`
    width: 280px;
    height: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px 0;
    margin: 20px 0;
    border-radius: 10px;
    background-color: var(--Purplish-blue);
    background-image: url(${bgsidebardesktop});
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width:1025px) {
        margin: 0 0 0 20px;
    }
    @media screen and (max-width:600px) {
        width:100%;
        min-height: 170px;
        justify-content: center;
        border-radius: 0;
        padding:0 50px;
        margin: 0 -20px 0;
        background-image: url(${bgheadermobile});
    }
`
export const Sidebarsteps = styled(Hstack)`
    gap: 15px;
    padding: 0 35px;
    margin: 26px 0 0;
    &:last-child{
        display:none;
    }
    @media screen and (max-width:1025px) {
        padding: 0 20px;
    }
    @media screen and (max-width:600px) {
        width: 20%;
        margin: 0;
        padding: 35px 0;
    }
`
export const StepsInfo = styled(Vstack)`
    align-items: flex-start;
    p{
        text-transform: uppercase;
        margin:0;
    }
    .stepnumber{
        font-size: .8em;
        font-weight: var(--regular);
        color: hsl(231, 11%, 70%);
    }
    .stepdesc{
        font-size: .95em;
        font-weight: var(--bold);
        color: var(--White);
    }
    @media screen and (max-width:1025px) {
        .stepnumber{
            font-size: .7em;
        }
        .stepdesc{
            font-size: .8em;
        }
    }
    @media screen and (max-width:600px) {
        display:none;
    }
`
export const Step2Aligner = styled(Vstack)`
    @media screen and (max-width:600px) {
        width: 100%;
        gap:125px;
        margin-bottom: 20px;
    }
`
export const Step3Aligner = styled(Step2Aligner)`
    @media screen and (max-width:600px) {
        gap: 235px;
    }
`
export const Step4Aligner = styled(Step2Aligner)`
    @media screen and (max-width:600px) {
        gap: 235px;
    }
`
export const CircleNumber = styled.div`
    display: flex;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1.5px solid var(--White);
`
export const NextStepbtn = styled.button`
    width: 26%;
    height: 50px;
    border-radius: 8px;
    border: none;
    background-color: var(--Marine-blue);
    font-size: 1em;
    font-weight: var(--bold);
    color: var(--White);
    cursor: pointer;
    &:hover{
        background-color: var(--Pastel-blue);
    }
    &:active{
        background-color: var(--Purplish-blue);
    }
    @media screen and (max-width:600px) {
        width:35%;
        padding:0 10px;
    }
`
export const Firstnextstepbtn = styled(NextStepbtn)`
    @media screen and (max-width:600px) {
        width:44%;
        padding:0 10px;
        margin: 0 -13% -125% 0;
    }
`
export const Confirmbtn = styled(NextStepbtn)`
    background-color: var(--Purplish-blue);
    &:hover{
        background-color: var(--Pastel-blue);
    }
    &:active{
        background-color: var(--Marine-blue);
    }
`
export const GoBackbtn = styled(NextStepbtn)`
    width: auto;
    height: auto;
    border-radius: 8px;
    border: none;
    background-color: var(--White);
    font-size: .9em;
    font-weight: var(--bold);
    color: var(--Cool-gray);
    margin:0 0 0 30px;
    cursor: pointer;
    &:hover{
        color: var(--Marine-blue);
        background-color: var(--White);
    }
    &:active{
        color: var(--Pastel-blue);
        background-color: var(--White);
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    color: var(--Cool-gray);
    margin: 20px auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:5px 0;
    a{
        color: var(--Purplish-blue);
    }
    p{
        font-size: .8rem;
    }
`
