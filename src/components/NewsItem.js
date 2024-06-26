import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3 mx-2">
        <div className="card" style={{width: "18rem;"}}>
            <img src={!imageUrl?"https://c8.alamy.com/comp/2DAFT7P/unavailable-stamp-unavailable-sign-round-grunge-label-2DAFT7P.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
