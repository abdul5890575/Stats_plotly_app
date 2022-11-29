import { combineReducers } from "redux"

const dataUploaded = (data={},action) => {
  if(action.type === 'UPLOAD_DATA'){
    return {...action.payload}
  }
  return data;
}

const selectedChartType = ( selectedChart = '', action) => {
  if(action.type === 'CHART_SELECTED'){
    return action.payload
  }
  return selectedChart
}

export default combineReducers({
  dataUploaded, selectedChartType
})