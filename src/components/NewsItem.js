import React, { Component } from 'react'

export class NewsItem extends Component {

    
  render() {
    let {title,description,imageUrl,url} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a5b4f912939088a29672279010a95151.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
