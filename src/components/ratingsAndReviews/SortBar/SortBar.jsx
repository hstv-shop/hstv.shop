/* eslint-disable */
import React from 'react';

const SortBar = (props) => {

  const handleClick = (event) => {
    if (event.target.value) {
      props.getSortData(event.target.value);
    }
  }

  return (
    <div>
      <label> {props.totalReviews} reviews, sorted by </label>
      <select onChange={handleClick} >
        <option value="relevant">Relevant</option>
        <option value="helpful">Helpful</option>
        <option value="newest">Newest</option>
      </select>
    </div>

  )

};

export default SortBar;