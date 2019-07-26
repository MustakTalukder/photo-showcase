import React, { Component } from "react";
import axios from "axios";

export default class LatestPhotos extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.unsplash.com/photos?client_id=ed24bba4257b594cd5f5ee8b6009cfd11f558d8d0228df87285a93707f98d6da"
      )
      .then(res => {
        this.setState({
          photos: res.data
        });
      });
  }

  render() {
    console.log(this.state.photos);

    return this.state.photos.map(photo => (
      <div key={photo.id} className="col-lg-3">
        <div className="single-photo-item">
                <a className="d-block" href="/">
                    <div className="photo-wrapper">
                    <img src={photo.urls.small} alt={photo.description} />

                    </div>
                    
                    <h5>{photo.description}</h5>

                    <p className="cat-name">by - {photo.user.first_name} {photo.user.last_name}</p>
          </a>
        </div>
      </div>
    ));

  }
}
