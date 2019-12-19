import React, { Component } from 'react';
import Home from "../componentes/Home";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchItineraries } from "../actions/itinerariesActions";
import { fetchAllAxiosComments } from "../actions/commentActions";
import {
    Card
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import reply from "../componentes/imagenes/reply.png";
import error from "../componentes/imagenes/404-error.jpg";
import Toggle from "../componentes/Toggle";
import Activities from "../componentes/Activities";
import jwt_decode from 'jwt-decode'
import Comments from "../componentes/Comments";
import Favourite from "../componentes/newFavourite";
class Itineraries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            profileImg: "",
            UserId: "",
            city:""
        };
    }    
    async fetchItineraries() {
        var city = this.props.match.params.city;
        console.log(city);
        this.setState({ city: city });
        await this.props.fetchItineraries(city);
    }

    componentDidMount() {
        this.fetchItineraries();
        this.props.fetchAllAxiosComments();
        if (localStorage.usertoken) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                username: decoded.name,
                profileImg: decoded.picture,
                UserId: decoded._id
            })
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="headerItineraries">
                        <NavLink to="/Cities">
                            <img src={reply} alt="backToCities" className="backCities" />
                        </NavLink>
                        <h1 className="ItinerariesTitle">{this.state.city}</h1>
                    </div>
                    {this.props.itinerary.length === 0 ?
                        <div>
                            <h1 className="NoItineraries"> Oops seems that there is no Itinerary for this city yet! </h1>
                            <img src={error} alt="404" className="error" />
                        </div>
                        : this.props.itinerary.map(itineraries => (
                            <React.Fragment key={itineraries._id}>
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
                                            {localStorage.usertoken ? 
                                                <Favourite ItineraryId = {itineraries._id} UserId = {this.state.UserId}/>
                                                : ""
                                            }
                                        </div>
                                    </div>
                                    <div className="Activities">
                                        <Toggle>
                                            <Activities activities={itineraries.activities} />
                                            <div className="Comments">
                                                <Comments ItineraryId={itineraries._id} username={this.state.username} profileImg={this.state.profileImg}/>

                                                {this.props.comments.comments.map(comments => (
                                                    <React.Fragment key={comments._id}>
                                                        <div>
                                                            {comments.ItineraryId === itineraries._id ?

                                                                <div className="Comments-box">
                                                                    <div className="userComment">
                                                                        <img src={comments.profileImg} alt="profileImg" className="commentsImg" />
                                                                    </div>
                                                                    <div className="message">
                                                                        <p className="messagetext"><b className="userName">{comments.username}</b> &nbsp; {comments.message}</p>
                                                                    </div>
                                                                </div>
                                                                : ""}
                                                        </div>
                                                    </React.Fragment>
                                                ))
                                                }

                                            </div>
                                        </Toggle>
                                    </div>
                                </Card>
                            </React.Fragment>
                        ))}
                </main>
                <footer className="homeFooter flex">
                    <div className="contenedor home">
                        <Home />
                    </div>
                </footer>
            </React.Fragment>
        )

    }
}
Itineraries.propTypes = {
    fetchItineraries: PropTypes.func.isRequired,
    itineraries: PropTypes.array,
    comment: PropTypes.array
};
const mapStateToProps = state => ({
    itinerary: state.itineraries.itinerary,
    comments: state.comments
});

export default connect(
    mapStateToProps,
    { fetchItineraries, fetchAllAxiosComments }
)(Itineraries);