import Papa from "papaparse";

function parseCsvHelper(e){
  let result;
  return new Promise(function(resolve, error) {
    Papa.parse(e.target.files[0], {
      header: false,
      skipEmptyLines: true,
        complete: function (results) {
          let x = [];
          let y = [];
          let z = [];
    
          // Iterating data to get column name and their values
          results.data.map((d) => {
            x.push(d[0]);
            y.push(d[1]);
            if (d[2]) {
              z.push(d[2]);
            }
          });
          result = { x: x, y: y, z: z };
          resolve(result)
        },
      });
  });

};

export {parseCsvHelper};