import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import DataDisplay from './DataDisplay';

class Data extends Component {
  constructor(props){
    super(props);
    this.state = {windowHeight: 1000, windowWidth: 300, data: null}
  }

  componentWillMount(){
    if(!this.props.match.params.zipcode || this.props.match.params.zipcode.length !== 5){
      this.props.history.push(`/`);
    }else{
      fetch('/api/getData', {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          zip: this.props.match.params.zipcode,
        }),
      }).then(resp => resp.json()).then(data => {
        this.setState({windowHeight: window.innerHeight, windowWidth: window.innerWidth, data: data.data});
      }).catch(err => {
        this.props.history.push(`/`);
      });
    }
  }

  render(){
    return(
        <div className="pageContainer">
          <div className="staticMap" style={{backgroundImage:`url(https://maps.googleapis.com/maps/api/staticmap?size=${this.state.windowWidth}x${this.state.windowWidth}&center=${this.props.match.params.zipcode}&key=AIzaSyAQKGSHo-JvN3JCfRydHWXJiatCa4bWUis)`}}>
            <div className="locationTitle">{this.state.data && `${this.state.data.city.city}, ${this.state.data.city.state}`}</div>
          </div>
          <Button className="searchAgainButton" onClick={() => this.props.history.push(`/`)} bsStyle="primary">Search Again</Button>
          <Scrollbars style={{ width: '100vw', height: '100vh' }} autoHide>
            <div className="dataContent">
              <Grid fluid>
                <Row>
                  <Col lg={2} md={2} sm={1} xs={0} />
                  <Col lg={8} md={8} sm={10} xs={12}>
                    {this.state.data && <DataDisplay data={this.state.data} />}
                  </Col>
                  <Col lg={2} md={2} sm={1} xs={0} />
                </Row>
              </Grid>
            </div>
          </Scrollbars>
        </div>
    );
  }
}

export default Data;