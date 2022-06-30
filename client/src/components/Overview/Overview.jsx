import React from 'react';
import Gallery from './Gallery.jsx';
import StarRating from './StarRating.jsx';
import './overview.css'

class Overview extends React.Component {
  render () {
    return (
      <div>
        <div id='gallery'>
          <Gallery />
        </div>

        <div id='description'>
          placeholder for product details, style, add to basket
          <StarRating />
        </div>
      </div>
    )
  }
}

export default Overview;