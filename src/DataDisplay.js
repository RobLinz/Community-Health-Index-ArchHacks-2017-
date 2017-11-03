import React, {Component} from 'react';
import {Bar, Radar} from 'react-chartjs-2';
import {Grid, Col, Row, PageHeader} from 'react-bootstrap';

class DataDisplay extends Component {

  render() {
    console.log(this.props);
    return (
        <div className="dataContentInner">
          <Grid fluid>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <PageHeader>
                  Environmental Risk Factors
                </PageHeader>
              </Col>
            </Row>
            <Row>
              <Col md={8} lg={8} sm={8}>
                <Bar data={{
                  labels: ["Water Quality", "Air Quality", "Land Quality", "Built Quality", "Social Quality", "Overall Quality", "Superfund Sites"],
                  datasets: [{
                    label: this.props.data.city.city,
                    data: [this.props.data.city.waterEQI, this.props.data.city.airEQI, this.props.data.city.landEQi, this.props.data.city.builtEQI, this.props.data.city.socialEQI, this.props.data.city.totalEQI, this.props.data.city.superfundSites],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                    ],
                    borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1
                  },{
                    label: this.props.data.city.state,
                    data: [this.props.data.state.waterEQI, this.props.data.state.airEQI, this.props.data.state.landEQi, this.props.data.state.builtEQI, this.props.data.state.socialEQI, this.props.data.state.totalEQI, this.props.data.state.superfundSites],
                    backgroundColor: [
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                    ],
                    borderColor: [
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                  },{
                    label: "United States",
                    data: [this.props.data.country.waterEQI, this.props.data.country.airEQI, this.props.data.country.landEQi, this.props.data.country.builtEQI, this.props.data.country.socialEQI, this.props.data.country.totalEQI, this.props.data.country.superfundSites],
                    backgroundColor: [
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                    ],
                    borderColor: [
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                    ],
                    borderWidth: 1
                  }]
                }} />

              </Col>
              <Col lg={4} md={4} sm={4}>
                <p>EQI stands for “environmental quality data”,  and gives locations a rating based on a variety of factors. EQI is broken down into 5 components, air, water, land, built, and sociodemographic environments.</p>
              </Col>
            </Row>
            
             <Row>
              <Col lg={8} md={8} sm={8}>
                <PageHeader>
                  Mortality
                </PageHeader>
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={4} sm={4}>
                The percentage of excess deaths broken down by rural and metropolitan data, calculated by the number of projected deaths for the area.
              </Col>
              <Col md={8} lg={8} sm={8}>
                <Radar data={{
                  labels: ["Heart", "Respiratory", "Injury", "Stroke", "Cancer"],
                  datasets: [{
                    label: this.props.data.city.city,
                    data: [this.props.data.city.Heart, this.props.data.city.Resp, this.props.data.city.Injury, this.props.data.city.Stroke, this.props.data.city.Cancer],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.4)',
                      //'rgba(255, 99, 132, 0.9)',
                      //'rgba(255, 99, 132, 0.9)',
                      //'rgba(255, 99, 132, 0.9)',
                      //'rgba(255, 99, 132, 0.9)',
                    ],
                    borderColor: [
                      'rgba(255,99,132,1)',
                      //'rgba(255,99,132,1)',
                      //'rgba(255,99,132,1)',
                      //'rgba(255,99,132,1)',
                      //'rgba(255,99,132,1)',
                    ],
                    borderWidth: 2  
                  },{
                    label: this.props.data.city.state,
                    data: [this.props.data.state.Heart, this.props.data.state.Resp, this.props.data.state.Injury, this.props.data.state.Stroke, this.props.data.state.Cancer],
                    backgroundColor: [
                      //'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.4)',
                      /*'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',*/
                    ],
                    borderColor: [
                      //'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      /*'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',*/
                    ],
                    borderWidth: 2
                  },{
                    label: "United States",
                    data: [this.props.data.country.Heart, this.props.data.country.Resp, this.props.data.country.Injury, this.props.data.country.Stroke, this.props.data.country.Cancer],
                    backgroundColor: [
                      //'rgba(255, 206, 86, 0.9)',
                      //'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.4)',
                      //'rgba(255, 206, 86, 0.9)',
                      //'rgba(255, 206, 86, 0.9)',
                    ],
                    borderColor: [
                      //'rgba(255, 206, 86, 0.9)',
                      //'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 1)',
                      //'rgba(255, 206, 86, 0.9)',
                      //'rgba(255, 206, 86, 0.9)',
                    ],
                    borderWidth: 2
                  }]
                }} />

              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <h2>Sources</h2>
                <a href="https://catalog.data.gov/dataset/usepa-environmental-quality-index-eqi-air-water-land-built-and-sociodemographic-domains-transf" target="_blank">
                  https://catalog.data.gov/dataset/usepa-environmental-quality-index-eqi-air-water-land-built-and-sociodemographic-domains-transf
                </a>
                <br />
                <a href="https://catalog.data.gov/dataset/nchs-potentially-excess-deaths-from-the-five-leading-causes-of-death" target="_blank">
                  https://catalog.data.gov/dataset/nchs-potentially-excess-deaths-from-the-five-leading-causes-of-death
                </a>
                <br />
                <br />
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default DataDisplay;
