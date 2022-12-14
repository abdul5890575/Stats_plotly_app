import Plot from 'react-plotly.js'; 
import { connect } from 'react-redux'

function Chart(props) {
  
  return (
    <div id="myDiv">
    { <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        {editable: true}
      ]}
      layout={{width: 600, height: 550, title: '3D'}}
    />}
    <div>
    { <Plot
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          z: [2,3,6],
          type: 'scatter3d',
          mode: 'lines+markers',
          marker: {color: 'red'},
        }
      ]}
      layout={{width: 600, height: 550, title: '3D'}}
    />}
    </div>
    <div >
    {<Plot
      data={[
        {
          x: [[1, 2, 3],[6,7,9]],
          y: [[2, 6, 3],[47,23,34]],
          z: [[2,6],[8,23]],
          type: 'surface',
          surfacecolor: {color: 'red'},
          ids: ['a','d','gg'],
          text:"testing"
        }
      ]}
      layout={{width: 600, height: 550, title: 'surface'}}
    />}
    </div>
    <div>
    { <Plot
      data={[
        {
          x: [1, 2, 3 ,6,7,9],
          y: [2, 6, 3 ,47,23,34],
          z: [2,6,8,13,18,23],
          type: 'mesh3d',
          text:"testing"
        }
      ]}
      layout={{width: 600, height: 550, title: 'mesh'}}
    />}
    </div>
    </div>
  ) 

}

const mapStateToProps = (state) => {
  console.log('statee',state)
  return {}
}

export default connect(mapStateToProps)(Chart);


