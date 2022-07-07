import React from 'react';
import './rating.css';
import Stars from './Stars.jsx';
import StarBar from "./StarBar.jsx";
import Characteristics from "./Characteristics.jsx";


class Summary extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    var recommend = parseInt(this.props.results.recommended.true);
    var negative = parseInt(this.props.results.recommended.false);
    var star_1=0;
    var star_2=0;
    var star_3=0;
    var star_4=0;
    var star_5=0;
    var total =0;
    for(var key in this.props.results.ratings){
      total+=(parseInt(this.props.results.ratings[key])*parseInt(key))
    }

    console.log('total'+total)
    var num = (Math.round(total/25*10)/10/5)*100;
    var str =num.toString()+"%";
    console.log('str in summary'+str);
    var totalStars = parseInt(this.props.results.ratings[5])+
    parseInt(this.props.results.ratings[4])+parseInt(this.props.results.ratings[3])
    + parseInt(this.props.results.ratings[2])+parseInt(this.props.results.ratings[1]);
    // console.log("totalStars"+totalStars);
    var bar5 = Math.floor(parseInt(this.props.results.ratings[5])/totalStars*100);
    // console.log('bar5'+bar5);
    var bar4 = Math.floor(parseInt(this.props.results.ratings[4])/totalStars*100);
    var bar3 = Math.floor(parseInt(this.props.results.ratings[3])/totalStars*100);
    var bar2 = Math.floor(parseInt(this.props.results.ratings[2])/totalStars*100);
    var bar1 = Math.floor(parseInt(this.props.results.ratings[1])/totalStars*100);
    var percent=Math.floor((recommend/(recommend+negative))*100);
    var star5 = this.props.results.ratings[5];
    var star4 = this.props.results.ratings[4];
    var star3 = this.props.results.ratings[3];
    var star2 = this.props.results.ratings[2];
    var star1 = this.props.results.ratings[1];
    var average = Math.round(total/25*10)/10;
    var size = this.props.results.characteristics.Size ? this.props.results.characteristics.Size.value:5;
    var fit = this.props.results.characteristics.Fit ? this.props.results.characteristics.Fit.value:5;
    var length = this.props.results.characteristics.Length ? this.props.results.characteristics.Length.value:5;
    var comfort = this.props.results.characteristics.Comfort ? this.props.results.characteristics.Comfort.value:5;
    var quality =this.props.results.characteristics.Quality  ? this.props.results.characteristics.Quality.value:5;
    var width = this.props.results.characteristics.Width  ? this.props.results.characteristics.Width.value:5;
    var starsDisplay = str;
    var  bar5Display = bar5.toString()+"%";
    var bar4Display = bar4.toString()+"%";
    var  bar3Display =bar3.toString()+"%";
    var  bar2Display = bar2.toString()+"%";
    var  bar1Display= bar1.toString()+"%";
    var array =[];
    var keys = Object.keys(this.props.results.characteristics);


    return(
      <div s>
        <h1> RATINGS &amp; REVIEWS</h1>
        <h2>{average}</h2>
        <Stars starsDisplay ={starsDisplay}/>
        <p> {percent}% of reviews recommend this product </p>
        <div>5 stars
          <StarBar barDisplay = {bar5Display}/>
        </div>
        <div>4 stars
          <StarBar barDisplay = {bar4Display}/>
        </div>
        <div>3 starsDisplay
          <StarBar barDisplay = {bar3Display}/>
        </div>
        <div>2 stars
          <StarBar barDisplay = {bar2Display}/>
        </div>
        <div>1 stars
          <StarBar barDisplay = {bar1Display}/>
        </div>
        <div> Size {size} </div>
        <div> Width {width} </div>
        <div> Comfort {comfort} </div>
        <div> Quality {quality} </div>
        <div> Length {length} </div>
        <div> Fit {fit} </div>
        <div>
          <div>
        {/* {keys.map((item,key) =>
          <Characteristics item ={item} key={key} />
        )} */}
          </div>
        </div>
      </div>

    )
  }

}
export default Summary;