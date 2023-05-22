import React from 'react';
import { Container } from './styled/Container.styled';
import {
  CircleNumber,
  Sidebar,
  Sidebarsteps,
  StepsInfo,
  Styledmultistep,
} from './styled/multistep.styled';
import Sidebarinfos from './Sidebarinfos.json';
import PlanSelections from './PlanSelections.json';
import Addons from './Addons.json';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';
import { Step4 } from './Step4';
import { Thankyou } from './Thankyou';

export const Multistepform = () => {
  const [selectedPlan, setSelectedPlan] = React.useState(PlanSelections[0]);
  function handlePlanSelect(planselection) {
    setSelectedPlan(planselection);
  }

  const [addOns, setAddOns] = React.useState(Addons);
    function handleCheckboxChange(event) {
      const { name, checked } = event.target;
      const updatedAddOns = addOns.map(addOn =>
        addOn.id === Number(name) ? { ...addOn, checked } : addOn
      );
      setAddOns(updatedAddOns);
    }

  const [currentPage, setCurrentPage] = React.useState(1);
  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function handlePreviousPage() {
    setCurrentPage(currentPage - 1);
  }
  function handleToPlanselection() {
    setCurrentPage(2);
  }
  const [selected, setSelected] = React.useState({
    activeSelection: PlanSelections[0].id,
    allSelections: [PlanSelections[0].id, PlanSelections[1].id, PlanSelections[2].id]
  });
  const toggleSelection = (index) => {
      setSelected({...selected, activeSelection: selected.allSelections[index]});
  };
  function toggleSelectionStyle(index) {
      if (selected.activeSelection === selected.allSelections[index]) {
          return 'active_plan';
      } else {
          return 'inactive_plan';
      }
  }
  const [toggleActive, setToggleactive] = React.useState(false);
  const toggleHandler = () => {
      setToggleactive(!toggleActive);

  }
  return (
    <Container>
      <Styledmultistep>
        <Sidebar>
          {Sidebarinfos.map((sidebarinfo) => {
            return (
              <Sidebarsteps
                key={sidebarinfo.id}
              >
                <CircleNumber className={`step ${currentPage === sidebarinfo.step ? 'active' : 'inactive'}`}>
                  <p>
                    {sidebarinfo.step}
                  </p>
                </CircleNumber>
                <StepsInfo>
                  <p className='stepnumber'>
                    {sidebarinfo.title}
                  </p>
                  <p className='stepdesc'>
                    {sidebarinfo.subtitle}
                  </p>
                </StepsInfo>
              </Sidebarsteps>
            )
          })}
        </Sidebar>
        {currentPage === 1 && (
          <Step1 handleNextPage={handleNextPage}/>
        )}

        {currentPage === 2 && (
          <Step2
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            toggleHandler={toggleHandler}
            toggleActive={toggleActive}
            PlanSelections={PlanSelections}
            toggleSelection={toggleSelection}
            toggleSelectionStyle={toggleSelectionStyle}
            selectedPlan={PlanSelections}
            onPlanSelect={handlePlanSelect}
          />
        )}

        {currentPage === 3 && (
          <Step3
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            selectedPlan={selectedPlan}
            toggleActive={!toggleActive}
            addOns={addOns}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}

        {currentPage === 4 && (
          <Step4
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handleToPlanselection={handleToPlanselection}
            selectedPlan={selectedPlan}
            toggleActive={!toggleActive}
            addons={addOns}
          />
        )}

        {currentPage === 5 && (
          <Thankyou/>
        )}
      </Styledmultistep>
    </Container>
  )
}
