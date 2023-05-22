import React from 'react'
import { SelectPlan, StyledFormLabel, StyledPlan } from './styled/step2.styled'
import { GoBackbtn, Hstack, Hstackflexi, NextStepbtn, Step2Aligner, Vstack } from './styled/multistep.styled'
import { FormLabel, Switch } from '@chakra-ui/react';

export const Step2 = (props) => {
    function handlePlanClick(selectedPlan) {
        props.onPlanSelect(selectedPlan);
      }
  return (
    <Step2Aligner>
        <SelectPlan>
            <h1>
                Select your plan
            </h1>
            <h2>
                You have the option of monthly or yearly billing.
            </h2>
            <Hstackflexi className='Spreader'>
            {props.PlanSelections.map((planselection, index) => {
                return (
                    <StyledPlan
                        key={planselection.id}
                        className={props.toggleSelectionStyle(index)}
                        onClick={() => {
                            props.toggleSelection(index);
                            handlePlanClick(planselection)
                        }}
                    >
                        <img src={require(`${planselection.icon}`)} alt={planselection.plan} width='35px'/>
                        <Vstack className='mobile_justify'>
                            <p className='plan'>
                                {planselection.plan}
                            </p>
                            <p className='duration'>
                                {!props.toggleActive?planselection.Monthly : planselection.Yearly}
                            </p>
                            <p className='bonus'>
                                {props.toggleActive && planselection.Bonus}
                            </p>
                        </Vstack>
                    </StyledPlan>
                )
                })
            }
            </Hstackflexi>
            <StyledFormLabel>
                <FormLabel htmlFor='Monthly' mb='0' mr='6'>
                    <p className={props.toggleActive && 'monthly_inactive'} >
                        Monthly
                    </p>
                </FormLabel>
                <Switch onChange={props.toggleHandler} size='md' id='switch-plan' defaultChecked={props.toggleActive} className='switchaxe'/>
                <FormLabel htmlFor='Yearly' mb='0' ml='-3'>
                    <p className={!props.toggleActive && 'yearly_inactive'} >
                        Yearly
                    </p>
                </FormLabel>
            </StyledFormLabel>
        </SelectPlan>
        <Hstack className='btnSpreader'>
            <GoBackbtn onClick={props.handlePreviousPage}>
                Go Back
            </GoBackbtn>
            <NextStepbtn onClick={props.handleNextPage}>
                Next Step
            </NextStepbtn>
        </Hstack>
    </Step2Aligner>
  )
}
