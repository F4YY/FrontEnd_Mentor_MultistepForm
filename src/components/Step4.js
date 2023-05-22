import React from 'react';
import { Confirmbtn, GoBackbtn, Hstack, Step4Aligner, Vstack } from './styled/multistep.styled';
import { Description, OnlineDesc, StyledSummary, Total } from './styled/step4.styled';

export const Step4 = (props) => {
  return (
    <Step4Aligner>
        <StyledSummary>
            <h1>
                Finishing up
            </h1>
            <h2>
                Double-check everything looks OK before confirming.
            </h2>
            <Description>
                <Vstack className='justifier'>
                    <p>
                        {props.selectedPlan.plan} ({props.toggleActive?'Monthly' : 'Yearly'})
                    </p>
                    <p className='change' onClick={props.handleToPlanselection}>
                        Change
                    </p>
                </Vstack>
                <p>
                    {props.toggleActive?props.selectedPlan.Monthly : props.selectedPlan.Yearly}
                </p>
            </Description>
            <span className='gap_break1'/>
            {props.addons.map((addon) => (
                <OnlineDesc key={addon.id}>
                    {addon.checked &&
                        <>
                            <p>{addon.title}</p>
                            <p>{props.toggleActive?addon.price_month : addon.price_year}</p>
                        </>
                    }
                </OnlineDesc>
            ))}
                <span className='gap_break2'/>
                <Total>
                    <p>
                        Total (per {props.toggleActive?'month' : 'year'})
                    </p>
                    <p className='total'>
                        {props.toggleActive? `$${parseInt(props.selectedPlan.Monthly.slice(1), 10) +
                            props.addons.map(addon => {
                                if (addon.checked) {
                                    return parseInt(addon.price_month.slice(2, -3), 10);
                                } else {
                                    return 0;
                                }
                            }).reduce((total, addonPrice) => {
                                return total + addonPrice;
                            }, 0)
                        }/mo`
                        : `$${parseInt(props.selectedPlan.Yearly.slice(1), 10) +
                            props.addons.map(addon => {
                                if (addon.checked) {
                                    return parseInt(addon.price_year.slice(2, -3), 10);
                                } else {
                                    return 0;
                                }
                            }).reduce((total, addonPrice) => {
                                return total + addonPrice;
                            }, 0)
                        }/yr`
                        }
                    </p>
                </Total>
        </StyledSummary>
        <Hstack className='btnSpreader'>
            <GoBackbtn onClick={props.handlePreviousPage}>
                Go Back
            </GoBackbtn>
            <Confirmbtn onClick={props.handleNextPage}>
                Confirm
            </Confirmbtn>
        </Hstack>
    </Step4Aligner>
  )
}
