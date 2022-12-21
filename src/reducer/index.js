import { combineReducers } from "redux"

const dataUploaded = (data={},action) => {
  if(action.type === 'UPLOAD_DATA'){
    return {...action.payload}
  }
  return data;
}

const selectedChartType = ( selectedChart = 'line', action) => {
  if(action.type === 'CHART_SELECTED'){
    return action.payload
  }
  return selectedChart
}

const selectedMode = ( selectedMode = 'lines', action) => {
  if(action.type === 'MODE'){
    switch (action.payload) {
      case 'scatter':
        selectedMode = 'markers'
        break
      case 'line':  
        selectedMode = 'lines'
        break
    }
  }
  return selectedMode
}


export default combineReducers({
  dataUploaded, selectedChartType, selectedMode
})