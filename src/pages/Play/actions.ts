export const CLEAR_CHALLENGE_DATA = 'CLEAR_CHALLENGE_DATA'
export const clearChallengeData = () => {
  return {
    type: CLEAR_CHALLENGE_DATA,
  }
}

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'
export const setActiveTab = (data) => {
  return {
    type: SET_ACTIVE_TAB,
    data
  }
}

