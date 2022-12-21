//Action creator
export const selectChart = (chart) => {
  return {
    type: 'CHART_SELECTED',
    payload: chart
  }
}

export const uploadData = (data) => {
  return {
    type: 'UPLOAD_DATA',
    payload: data
  }
}

export const selectedMode = (data) => {
  return {
    type: 'MODE',
    payload: data
  }
}





