import React from 'react';
import ReactTooltip from 'react-tooltip'
import {connect} from 'react-redux';


const ArrowButton = ({page, side, loading, changePage}) => {
  let activeButton = true;
  let tooltipText = 'Prev Page';
  
  if(loading || (side === 'right' && page === 4) || (side === 'left' && page === 1)) activeButton = false;
  let arrowClass = activeButton ? 'page-leaf-btn-active' : 'page-leaf-btn-inactive'
  
  if(side === 'right') {
    tooltipText = 'Next Page';
    arrowClass += ' page-leaf-btn-right'
  }

  if (!activeButton) return(
    <button className={arrowClass}></button>
  )

  return(
    <React.Fragment >
      <button onClick={changePage} data-tip data-for={tooltipText} className={arrowClass}></button>
      <ReactTooltip 
        delayShow={50}
        delayHide={50}
        place={side}
        border={true} 
        className="arrow-btn-tooltip"
        id={tooltipText}>
        {tooltipText}
      </ReactTooltip>
    </React.Fragment>
  )
}

const mapStateToProps = ({spellList}) => {
  return {
    page: spellList.page,
    loading: spellList.loading
  }
}


export default connect(mapStateToProps)(ArrowButton);