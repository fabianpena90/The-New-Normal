import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Covid(props) {
  const [covid, setCovid] = useState([]);

  useEffect(() => {
    async function getCovid() {
      let res = await axios.get(`https://api.covidtracking.com/v1/states/current.json`);
      setCovid(res.data)

    }
    getCovid()
  }, [])

  function getDataCovid(){
    return covid.map((eachData) => {
      return (
        <tr className="">
          <td className="">{eachData.state}</td>
          <td className="">{eachData.positive}</td>
          <td className="">{eachData.negative}</td>
          <td className="">{eachData.death}</td>
        </tr>
      )
    })
  }

  return (
    <div className="ui container">
      <img className="ui medium centered image" src="./img/COVID19-NP-Logo.png" alt="covid" />
    <table className="ui unstackable table">
      <thead className="">
        <tr className="">
          <th className="">State</th>
          <th className="">Positive Cases</th>
          <th className="">Negative Cases</th>
          <th className="">Deaths</th>
        </tr>
      </thead>
      <tbody className="">
        {getDataCovid()}
      </tbody>
    </table>
    </div>
  );
}

export default Covid;