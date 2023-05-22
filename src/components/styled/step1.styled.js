import styled from 'styled-components';

export const PersonalForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 530px;
    label{
        font-size: .9em;
        font-weight: var(--medium);
        color: var(--Marine-blue);
        margin: 25px 0 0 0;
    }
    .horizontal-align{
        width: 450px;
        justify-content: space-between;
        align-items: flex-end;
        margin: 0 0 0 85px;
    }
    @media screen and (max-width:1025px) {
        width: 500px;
    }
    @media screen and (max-width:600px) {
        width: 92%;
        height: auto;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 12px;
        margin: -70px 0;
        padding: 0 20px;
        background-color: var(--White);
        label{
            margin: 25px 0 0 0;
        }
        .horizontal-align{
            width: 100%;
            margin: 0;
        }
    }
`
export const Inputbox = styled.input`
    width: 450px;
    height: 50px;
    padding: 0 20px;
    border-radius: 10px;
    border: 1px solid var(--Light-gray);
    background-color: var(--White);
    font-size: .95em;
    font-weight: var(--bold);
    color: var(--Marine-blue);
    margin: 5px 0 0 85px;
    &::placeholder{
        color: var(--Cool-gray);
        font-weight: var(--bold);
    }
    @media screen and (max-width:600px) {
        width: 100%;
        height: 42px;
        padding: 0 20px;
        border-radius: 10px;
        border: 1px solid var(--Light-gray);
        background-color: var(--White);
        font-size: .95em;
        font-weight: var(--bold);
        color: var(--Marine-blue);
        margin: 5px 0 0 0;
    }
`
export const InputboxName = styled(Inputbox).attrs({
    id: 'Name',
    name: 'Name',
    type: 'text',
    placeholder: 'e.g. Riki Wendri'
})``
export const InputboxEmail = styled(Inputbox).attrs({
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'e.g. rikiwendri@gmail.com'
})``
export const InputboxPhone = styled(Inputbox).attrs({
    id:'Phone',
    name:'Phone',
    type: 'tel',
    placeholder: 'e.g. +62 812 8030 4648'
})`
    margin: 5px 0 45px 85px;
    @media screen and (max-width:600px) {
        margin: 5px 0 45px 0;
    }
`
export const ErrorNotif = styled.div`
    font-size: .9em;
    font-weight: var(--bold);
    color: var(--Strawberry-red);
`