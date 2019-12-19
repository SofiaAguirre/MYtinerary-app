import React, { Component } from 'react'
import like from "./imagenes/like.png";
import liked from "./imagenes/liked.png";
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { postAxiosFavourites, fetchAxiosFavourites, deleteAxiosFavourites } from "../actions/favouritesActions";

class newFavourite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserId: ""
        };
        this.imageClick = this.imageClick.bind(this);
    }
    imageClick(event) {
        let data = {
            UserId: this.state.UserId,
            ItineraryId: this.props.ItineraryId
        };
        this.props.postAxiosFavourites(data);
    }
    async componentDidMount() {
        var UserId = this.props.UserId
        this.setState({ UserId: UserId });
        await this.props.fetchAxiosFavourites(UserId);
    }
    Dislike(e) {
        e.preventDefault()
        this.props.favourites.favourites.map( favourite => 
            {if (favourite.ItineraryId === this.props.ItineraryId) {
                var noFav = favourite._id
                this.props.deleteAxiosFavourites(noFav);
            }} 
        );
    }
    render() {
        var src = like;
        const text = (
            <a href= "" onClick={this.Dislike.bind(this)} className="dislike">  Unlike </a>
        )
        return (
            <React.Fragment>
                <img src={src} alt="like" className="heart" onClick={this.imageClick} />
                {this.props.favourites.favourites.map(favourite => (
                    <React.Fragment key={favourite._id}>
                        {favourite.ItineraryId === this.props.ItineraryId ? text : ""}
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    favourites: state.favourites
})

export default connect(
    mapStateToProps,
    { postAxiosFavourites, fetchAxiosFavourites, deleteAxiosFavourites }
)(newFavourite)
