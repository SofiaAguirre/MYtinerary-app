import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { connect } from "react-redux";
import { fetchCities } from "../actions/citiesActions";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class Cities extends Component {
  componentDidMount() {
    this.props.fetchCities();
  }
  constructor() {
    super();
    this.state = {
      term: ""
    };
    this.search = this.search.bind(this);
  }
  search(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div className="input-group md-form form-lg form-1 pl-0">
          <div className="input-group-prepend">
            <span className="input-group-text cyan lighten-2" id="basic-text1">
              <i className="fas fa-search text-white" aria-hidden="true"></i>
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            onChange={this.search}
            placeholder="Search cities:"
            aria-label="Search"
          ></input>
        </div>
        <div>
          {this.props.city.filter(searchingFor(this.state.term)).map(cities => (
            <React.Fragment key={cities._id}>
              <NavLink to={`/itineraries/${cities.name}`}>
                <Card inverse className="cartas">
                  <CardImg src={cities.img} alt="Card image" className="cities" />
                  <CardImgOverlay>
                    <CardTitle className="card-title">{cities.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </NavLink>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
Cities.propTypes = {
  fetchCities: PropTypes.func.isRequired,
  city: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  city: state.cities.city
});

export default connect(
  mapStateToProps,
  { fetchCities }
)(Cities);