import { combineReducers } from "redux"

const dataUploadedReducer = (data=[],action) => {
  if(action.type === 'UPLOAD_DATA'){
    return data
  }
  return data;
}

const selectedChartTypeReducer = ( selectedChart = 'aa', action) => {
  if(action.type === 'CHART_SELECTED'){
    return action.payload
  }
  return selectedChart
}

export default combineReducers({
  dataUploadedReducer, selectedChartTypeReducer
})