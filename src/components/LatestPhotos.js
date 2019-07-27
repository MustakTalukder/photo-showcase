import React, { Component } from "react";
import axios from "axios";

export default class LatestPhotos extends Component {
  state = {
      photos: [],
    page: 1,
    searching: false,
    seachQuery: ''
  };
  
    

    
    
    
    loadPhoto() {
        axios
        .get(
          `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&per_page=16&page=${this.state.page}`
        )
        .then(res => {
          this.setState({
            photos: res.data
          });
        });

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });

    }

  componentDidMount() {
      this.loadPhoto();
      console.log(this.state.page);
      
    }
    

    loadNextPageHandler = e => {

        this.setState({
            page: this.state.page +1 
        })
        this.loadPhoto();

        console.log(this.state.page);
        
        
        
    }
    loadPrePageHandler = e => {

        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
            this.loadPhoto();
        }

        console.log(this.state.page);
        
        
  }


  changeHandler = e => {
    this.setState({
      seachQuery: e.target.value
    })
  }
  


  submitHandler = e => {
    e.preventDefault()

    console.log(this.state.seachQuery);
    

    axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${this.state.seachQuery}&per_page=16&page=${this.state.page}`
    )
    .then(res => {
      this.setState({
        photos: res.data.results
      });
    });


    this.setState({
      searching: true
    })
  }






    render() {
      console.log(`${process.env.REACT_APP_CLIENT_ID}`);
      console.log(process.env.REACT_APP_CLIENT_ID);
      
    console.log(this.state.photos);

      
      return (
        < React.Fragment >
          
          <div className="row top-heading">
            <div className="col my-auto"><h2>Latest Photos</h2></div>
              <div className="col col-auto my-auto">
                <form action="" onSubmit={this.submitHandler}>
                  <input onChange={this.changeHandler} type="text" placeholder="Search Key"/>
                  <input type="submit" value="Search"/>
                </form>
              </div>
            
          </div>
          
          <div className="row">


              {
                this.state.photos.map(photo => (
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
                ))
            }
            
            </div>
              

              <div className="row">
              <div className="col-lg-12">
                  <div className="load-more-">
                      <button className="btn btn-warning mr-2" onClick={this.loadPrePageHandler}>Back Page {this.state.page-1}</button>
                      <button className="btn btn-warning"  onClick={this.loadNextPageHandler}>Load Page {this.state.page}</button>
                  </div>
              </div>
              </div>
              
          </React.Fragment >
          
      )

  }
}
