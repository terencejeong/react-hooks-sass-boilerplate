import React, { useContext, useEffect } from 'react';
import AppraisalHeader from 'components/AppraisalHeader';
import AppraisalForm from 'components/AppraisalForm';
import { ContextOne } from 'context/ContextOne';

const useLocalStorage = () => {
  const { state, dispatch } = useContext(ContextOne);
  if (state.selectedStaff) {
    return state.selectedStaff
  } else {
    const staffName = localStorage.getItem('staffName');
    dispatch({
      type: "SET_STAFF",
      payload: staffName,
    });
    return staffName;
  }
};

const AppraisalContainer = () => {
  const staffName = useLocalStorage();
  return (
    <div className="appraisal">
      <div className="appraisal__header">
        <AppraisalHeader name={staffName} />
      </div>
      <div className="appraisal__form">
        <AppraisalForm name={staffName} />
      </div>
    </div>
  )
};

export default AppraisalContainer;
