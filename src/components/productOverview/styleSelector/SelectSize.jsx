/* eslint-disable */
import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import {SizeDiv, SelectSizing} from './StyleSelectorStyles.jsx';
import {IoIosArrowDown} from 'react-icons/io';

const customStyles = {
  control: () => ({
    width: '80%',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: '300',
  }),
}

const SelectSize = ({ openMenuOnFocus, selectRef, currentStyle, onSizeChange }) => {
  let sizes = new Set();
  for (let sku in currentStyle.skus) {
    if (currentStyle.skus[sku].quantity > 0) {
      sizes.add(currentStyle.skus[sku].size);
    }
  }
  sizes = Array.from(sizes);
  var options = [];
  for (var i = 0; i < sizes.length; i++) {
    options.push({value: sizes[i], label: sizes[i]});
  }
  if (sizes.length) {
    return (
      <SizeDiv>
        <SelectSizing>
          <Select  components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null}} options={options} ref={selectRef} openMenuOnFocus={true} styles={customStyles} onChange={(event) => onSizeChange(event)} placeholder={<div style={{color: 'black'}}>Size</div>}>
          </Select>
        </SelectSizing>
        <div><IoIosArrowDown/></div>
      </SizeDiv>
    );
  }
  return(
    <SizeDiv>
      <SelectSizing>
        <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} options={{value: '', label: ''}}  styles={customStyles} isDisabled placeholder={<div style={{color: 'black'}}>Out of Stock</div>}></Select>
      </SelectSizing>
      <div><IoIosArrowDown/></div>
    </SizeDiv>
  )
};

export default SelectSize;

