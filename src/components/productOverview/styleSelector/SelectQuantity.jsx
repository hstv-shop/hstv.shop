/* eslint-disable */
import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';

const QuantityDiv = styled.div`
  align-self: end;
  width: 25%;
  padding:0.35em 1.2em;
  border:0.1em solid black;
  margin:0 0.3em 0.3em 0;
  border-radius: 3px;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
`;

const customStyles = {
  option: () => ({}),
  control: () => ({
    textAlign: 'center'
  }),
}


const SelectQuantity = ({ currentSize, currentStyle, onQuantityChange }) => {
  if (Object.keys(currentSize).length) {
    let quantityList = [];
    for (let i = 1; i < currentSize.quantity; i++) {
      if (i >= 15) {
        break;
      }
      quantityList.push({value: i + 1, label: i + 1});
    }
    return (
      <QuantityDiv>
        {/* <select className='select-quantity' style={{all: 'unset'}}onChange={(event) => onQuantityChange(event)}>
          <option value='1'>1</option>
          {quantityList.map((amount, index) => {
            return <option value={amount} key={`amount${index}`}>{amount}</option>
          })}
        </select> */}
        <Select components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} options={quantityList} styles={customStyles} placeholder='Quantity'></Select>
      </QuantityDiv>
    )
  }
  return(
    <QuantityDiv>
      <Select  components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }} styles={customStyles} className='select-quantity' isDisabled placeholder='-' ></Select>
    </QuantityDiv>
  );
};

export default SelectQuantity;