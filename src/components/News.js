import React, { Component} from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    console.log('hello Im a constructor from news Component');
    this.state = {
      articles : [],
      loading : false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=cars&from=2025-01-08&sortBy=publishedAt&apiKey=3e412c4ad26c4669a7bee706d094d0a8";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">

            {this.state.articles.map((element) =>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem 
                  title={element.title ? element.title : ''} 
                  description={element.description ? element.description : ''} 
                  imageUrl={element.urlToImage} 
                  url={element.url} 
                />
              </div>
            })}
            
        </div>
      </div>
    )

  }
}

export default News
