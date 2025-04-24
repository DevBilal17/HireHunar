import React from 'react'
import styled from 'styled-components';
const AddJobButton = ({onClick}) => {
  return (
    
       <StyledWrapper>
      <button className="button" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 20 20" height={20} fill="none" className="svg-icon"><g strokeWidth="1.5" strokeLinecap="round" stroke="#fff"><circle r="7.5" cy={10} cx={10} /><path d="m9.99998 7.5v5" /><path d="m7.5 9.99998h5" /></g></svg>
        <span className="lable">Add</span>
      </button>
    </StyledWrapper>
  )
}
const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    height: 32px;
    width: 81px;
    border: none;
    background: linear-gradient(to right, #22d3ee, #3b82f6);
    border-radius: 20px;
    cursor: pointer;
  }

  .lable {
    line-height: 22px;
    font-size: 17px;
    color: #fff;
    font-family: sans-serif;
    letter-spacing: 1px;
  }

  .button:hover {
    background: linear-gradient(to right, #25bed5, #4d7dca);
  }

  .button:hover .svg-icon {
    animation: rotate 1.3s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(10deg);
    }

    50% {
      transform: rotate(0deg);
    }

    75% {
      transform: rotate(-10deg);
    }

    100% {
      transform: rotate(0deg);
    }}`

export default AddJobButton
