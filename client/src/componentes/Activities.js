import React, { Component } from 'react'
import Slider from "react-slick";

export default class Activities extends Component {
    render() {
        const settings = {
            className: "slider variable-width",
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        const { activities } = this.props;
        return (
            <div className="contenedorSlick">
                <Slider {...settings}>
                    {activities.map(activity =>
                        <React.Fragment key={activity.name}>
                            <div>
                                <p className="TitleActivity">{activity.name}</p>
                                <div className="flex">
                                    <img src={activity.picture} alt="activity" className="pictureActivity" />
                                </div>
                                <div className="flex">
                                    <p className="aboutActivity">{activity.about}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </Slider>
            </div>
        )
    }
}
