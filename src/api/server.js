export const postCompliment = async(toStaffMember, compliment) => {
  try {
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let submit = await fetch(
      `${process.env.REACT_APP_S5_APPRAISAL}/compliments`, {
        method: 'POST',
        body: JSON.stringify({ toStaffMember, compliment }),
        headers
      });
    return {
      success: 'Compliment successfully saved'
    }
  } catch(e) {
    console.log(e);
    return {
      error: 'There was an error'
    }
  }
};
