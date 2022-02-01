import React from 'react';

import { Card, Container, Table, Row, Col } from 'react-bootstrap';

class Ajolotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      /*selectedItem: '',*/
      url: '',
      facts: '',
      pics_repo: '',
      api_repo: '',
    };
  }

  changeStateClicked(item) {
    this.setState({
      url: item.url,
      facts: item.facts,
      api_repo: item.api_repo,
      pics_repo: item.pics_repo,
    });
  }

  async componentDidMount() {
    const response = await fetch(
      'https://github.com/AxolotlAPI/axolotl.py-api'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData['photos'],
      /*selectedItem: responseData['photos'][0], 
      Para Card se obtienen los elementos específicos, para poder coger de los arrays del elemento
      (por ejemplo de cámara)*/
      url: responseData['photos'][0].url,
      facts: responseData['photos'][0].facts,
      api_repo: responseData['photos'][0].api_repo,
      pics_repo: responseData['photos'][0].pics_repo,
    });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Ajolotes</h1>
          <Row>
            <Col lg={8} md={6}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Facts</th>
                    <th>Foto</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.changeStateClicked(item)}>
                        <td>{item.facts}</td>
                        <td>{item.pics_repo}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Ajolotes;
