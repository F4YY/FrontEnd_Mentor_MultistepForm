import React from 'react'
import { PickAddons, StyledAddons } from './styled/step3.styled'
import { GoBackbtn, Hstack, NextStepbtn, Step3Aligner, Vstack } from './styled/multistep.styled'

export const Step3 =(props) => {
    return (
    <Step3Aligner>
      <PickAddons>
        <h1>
            Pick add-ons
        </h1>
        <h2>
            Add-ons help enhance your gaming experience.
        </h2>
        {props.addOns.map(addOn => (
          <StyledAddons
            key={addOn.id}
            className={addOn.checked ? 'active_addons' : 'inactive_addons'}
          >
            <>
            <input
              type="checkbox"
              name={addOn.id}
              checked={addOn.checked}
              onChange={props.handleCheckboxChange}
            />
            <Vstack className='spreader'>
                <span className='addon_title'>{addOn.title}</span>
                <span className='addon_subtitle'>{addOn.subtitle}</span>
            </Vstack>
            </>
            <span className='addon_price'>{props.toggleActive?addOn.price_month : addOn.price_year}</span>
          </StyledAddons>
        ))}
      </PickAddons>
      <Hstack className='btnSpreader'>
        <GoBackbtn onClick={props.handlePreviousPage}>
            Go Back
        </GoBackbtn>
        <NextStepbtn onClick={props.handleNextPage}>
            Next Step
        </NextStepbtn>
      </Hstack>
    </Step3Aligner>
    );
  }

