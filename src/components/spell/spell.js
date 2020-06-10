import React from 'react';
import ReactTooltip from 'react-tooltip'
import { connect } from 'react-redux';

import SpellIcon from '../spell-icon';
import { selectSide } from '../../actions';

import './spell.scss';

const Spell = ({ spell, selectSide, side }) => {
  return(
    <div className="school-spell">
      <div className="school-spell-img">
        <SpellIcon icon={spell.icon}/>
      </div>
      <div className="school-spell-text">
        <h3>{spell.name}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ut rerum cum nesciunt facilis culpa.</p>
      </div>
      <button data-tip="Select Spell" onClick={() => selectSide(side, spell)} className="school-spell-btn">
      <ReactTooltip
        delayShow={50}
        delayHide={50}
        place="right" 
        border={true} 
        className="spell-tooltip" />
      </button>
    </div>
  )
}

// function mapStateToProps(state) {
//   return {

//   };
// }

const mapDispatchToProps=  {
  selectSide
}


 export default connect(null, mapDispatchToProps)(Spell);

