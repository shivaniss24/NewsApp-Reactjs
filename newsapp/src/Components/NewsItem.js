import React, { Component } from 'react'

export  class NewsItem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <>
      <div  className="card" style={{width: '18rem',margin:"1rem"}}>
  <img src={imageUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <a href="/newsDetail"  className="btn btn-sm btn-primary">Read more...</a>
  </div>
</div></>
    )
  }
}

export default NewsItem
