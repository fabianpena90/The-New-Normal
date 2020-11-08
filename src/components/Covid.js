import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Covid(props) {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    async function getCovid() {
      let res = await axios.get(`https://api.covidtracking.com/v1/states/current.json`);
      console.log(res.data)
      setCovid(res.data)

    }
    getCovid()
  }, [])

  function getDataCovid(){
    return covid.map((eachData) => {
      return (
        <tr class="">
          <td class="">{eachData.state}</td>
          <td class="">{eachData.positive}</td>
          <td class="">{eachData.negative}</td>
          <td class="">{eachData.death}</td>
        </tr>
      )
    })
  }

  return (
    <div className="ui container">
      <img className="ui medium centered image" src="./img/COVID19-NP-Logo.png" alt="covid" />
    <table class="ui unstackable table">
      <thead class="">
        <tr class="">
          <th class="">State</th>
          <th class="">Positive Cases</th>
          <th class="">Negative Cases</th>
          <th class="">Deaths</th>
        </tr>
      </thead>
      <tbody class="">
        {getDataCovid()}
      </tbody>
    </table>

      {/* <Table striped bordered hover size="md">
          <thead style={{textAlign: 'center'}}>
            <tr>
              <th>State</th>
              <th>Positive Cases</th>
              <th>Negative Cases</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody style={{textAlign: 'center'}}>
            {getDataCovid()}
          </tbody> */}
      {/* </Table> */}
    </div>
  );
}

export default Covid;