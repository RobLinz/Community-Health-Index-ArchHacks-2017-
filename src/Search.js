import React, { Component } from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import './App.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      value: '',
    }
  }

  handleChange = e => {
    if(e.target.value.indexOf(' ') === -1 && !isNaN(e.target.value) && e.target.value.length <= 5){
      this.setState({ value: e.target.value });
    }
  };

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.submit();
    }
  };

  submit = () => {
    if(this.state.value.length === 5){
      this.props.history.push(`/view/${this.state.value}`);
    }
  };

  render(){
    return(
        <div className="pageContainer" onKeyDown={this.handleKeyPress}>
          <div className="siteTitle">Community Health Index</div>
          <div className="searchBox">
            <FormGroup className="searchInput" controlId="searchInput">
              <FormControl
                  type="text"
                  placeholder="Zip Code"
                  bsSize="large"
                  value={this.state.value}
                  onChange={this.handleChange}
              />
            </FormGroup>
            <Button
                className="searchButton"
                bsStyle="primary"
                bsSize="large"
                onClick={() => this.submit()}
            >
              Search
            </Button>
          </div>
        </div>
    );
  }
}

export default Search;