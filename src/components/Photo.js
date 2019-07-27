import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios  from 'axios';
export default class Photo extends Component {

    state = {
        photo: [],
        loading: true 
    }

    componentDidMount() {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let PhotoID = params.get('id');

        console.log(PhotoID);
        

        axios
        .get(
          `https://api.unsplash.com/photos/${PhotoID}/?client_id=${process.env.REACT_APP_CLIENT_ID}`
        )
            .then(res => {
            console.log(res.data);
            
          this.setState({
              photo: res.data,
              loading:false
          });
        });
        
    }
    
    render() {
        let { photo } = this.state
        
        console.log(photo.urls);
        
        return (
            <div>
                <div className="photo-single-wrapper">
                    <div className="photo-single-info">
                        <div>
                            <a className="btn btn-warning" href="/">Back</a>
                        </div>
                       { photo.title && <h3>{photo.story.title}</h3>}
                        {photo.description&& <p>{photo.description}</p>}
                        <ul>
                            {photo.user && <li><label htmlFor="">Uploaded by: </label>{photo.user.name}</li>}
                            <li><label htmlFor="">Uploaded Date: </label>{photo.updated_at}</li>
                            {photo.exif && <li><label htmlFor="">Camera model: </label>{photo.exif.model}</li>}
                        </ul>

                        <a href={photo.links && photo.links.download}>Download</a>

                    </div>
                    <img src={photo.urls && photo.urls.regular} alt="Photo"/>
                </div>
            </div>
        )
    }
}
