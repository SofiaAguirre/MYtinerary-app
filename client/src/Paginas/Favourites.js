import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { fetchAllAxiosItineraries } from "../actions/itinerariesActions";
import { fetchAxiosFavourites } from "../actions/favouritesActions";
import Activities from "../componentes/Activities";
import Home from "../componentes/Home";
import jwt_decode from 'jwt-decode'
import {
    Card
} from 'reactstrap';
import Toggle from "../componentes/Toggle";
import Favourite from "../componentes/newFavourite"
export class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserId: ""
        };
    }
    componentDidMount() {
        this.props.fetchAllAxiosItineraries();
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            UserId: decoded._id
        })
        this.props.fetchAxiosFavourites(decoded._id);
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="titleForm">
                    <h1 className="ItinerariesTitle">Favourites:</h1>
                </div>
                <React.Fragment>
                    {this.props.favourites.favourites.length === 0 ?
                        <div className="NoFav">
                            <p>Here will go your Favourites! </p>
                        </div>
                        : this.props.itinerary.map(itineraries => (
                            <React.Fragment key={itineraries._id}>
                                {this.props.favourites.favourites.map(favourites => (
                                    <React.Fragment key={favourites._id}>
                                        {favourites.ItineraryId === itineraries._id ?
                                            <React.Fragment>
                                                <Card className=" ItinerariesCard">
                                                    <div className="flexItineraries">
                                                        <div className="Profile-box">
                                                            <img src={itineraries.profileImg} alt="profile-img" className="profileImg" />
                                                            <p className="profileName">{itineraries.profileName}</p>
                                                        </div>

                                                        <div className="Itineraries-box">
                                                            <div>
                                                                <p className="ItTit">{itineraries.title}</p>
                                                            </div>
                                                            <div className="flexItineraries">
                                                                <p className="Rating"> Likes: {itineraries.likes}</p>
                                                                <p className="Rating">{itineraries.hours} Hours</p>
                                                                <p className="Rating">{itineraries.price}</p>
                                                            </div>
                                                            <p className="Rating">{itineraries.hashtags}</p>
                                                        </div>
                                                        <div>
                                                            <Favourite ItineraryId={itineraries._id} UserId={this.state.UserId} />
                                                        </div>
                                                    </div>
                                                    <div className="Activities">
                                                        <Toggle>
                                                            <Activities activities={itineraries.activities} />
                                                        </Toggle>
                                                    </div>
                                                </Card>
                                            </React.Fragment>
                                            : ""}
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ))}
                    <footer className="homeFooter flex">
                        <div className="contenedor home">
                            <Home />
                        </div>
                    </footer>
                </React.Fragment>
            </React.Fragment>
        )
    }
}
Favourites.propTypes = {
    itineraries: PropTypes.array
};
const mapStateToProps = (state) => ({
    itinerary: state.itineraries.itinerary,
    favourites: state.favourites
})

export default connect(
    mapStateToProps,
    { fetchAllAxiosItineraries, fetchAxiosFavourites }
)(Favourites)

