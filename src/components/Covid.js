import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../Covid.css'

// Boostrap
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function Covid(props) {
  const [covid, setCovid] = useState([]);
  // const [state, setState] = useState('');

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
      // console.log(eachData.negative, eachData.state, eachData.positive, eachData.death)
      return (
            <tr>
              <td>{eachData.state}</td>
              <td>{eachData.positive}</td>
              <td>{eachData.negative}</td>
              <td>{eachData.death}</td>
            </tr>
      )
    })
  }

  return (
    <Container>
    <Image className="newNY" src="./img/COVID19-NP-Logo.png" fluid />
    {/* <img className="newNY" src="./img/COVID19-NP-Logo.png" alt="title"/> */}
      <Table striped bordered hover size="md">
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
          </tbody>
      </Table>
    </Container>
  );
}

export default Covid;