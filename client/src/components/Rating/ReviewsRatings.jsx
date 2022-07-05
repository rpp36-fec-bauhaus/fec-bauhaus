import React from 'react';
import Rating from './Rating.jsx';
import Summary from './Summary.jsx';



class ReviewsRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.productId,
      reviewsResults:[],
      sort: 'newest',
      metaData: getInitialMetaData(),
      count: 5,
    }
  }

  componentDidMount(){
    this.ratingDisplay();
    this.summaryDisplay();

  }

  ratingDisplay(){
    let productId = this.state.productId;
    var sort = this.state.sort;
    var count = this.state.count;
    var page = 1;

    console.log('d')
    let url =`reviews?product_id=${productId}&sort=${sort}&count=${count}&page=${page}`
    fetch(url)
    .then(response => response.json())
    .then(data=>{this.setState({reviewsResults:data.results})})
    .catch(err=> console.log(err))


  }
  summaryDisplay(){
    let productId = this.state.productId;
    let url ='reviews/meta' + productId

    fetch(url)
    .then(response => response.json())
    .then(data=>{
      this.setState({metaData:data}, () => {
        console.log(data);
      });
    })
    .catch(err=> console.log(err))
  }



  render(){
    return (
      <div >
        <div className ="rating-box">
        <Rating results = {this.state.reviewsResults}/>
        </div>
        <div className="summary-box">
        <Summary results ={this.state.metaData}/>
        </div>
      </div>
    );
  }
};

var getInitialMetaData = () => {
  return {"product_id":"0",
  "ratings":{"1":"0","2":"0","3":"0","4":"0","5":"0"},
  "recommended":{"false":"0","true":"0"},
  "characteristics":{
    "Fit":{"id":0,"value":"0"},
    "Length":{"id":0,"value":"0"},
    "Comfort":{"id":0,"value":"0"},
    "Quality":{"id":0,"value":"0"}}}
}

export default  ReviewsRatings;