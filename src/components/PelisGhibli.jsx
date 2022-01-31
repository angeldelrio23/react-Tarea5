import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

import './table_component.css';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: null, tableData: [] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({ tableData: responseData, selectedItem: responseData[0] });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Películas Ghibli</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Puntuación</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.title}</td>
                        <td>{item.director}</td>
                        <td>{item.release_date}</td>
                        <td>{item.rt_score}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PelisGhibli;
