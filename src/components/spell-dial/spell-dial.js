import React from 'react';
import ReactTooltip from 'react-tooltip';

import SpellIcon from '../spell-icon';
import SpellIconBlocked from '../spell-icon-blocked';
import { connect } from 'react-redux';
import { closeSpellDial, changeSpell } from '../../actions';


import './spell-dial.scss';


const SpellDial = ({side, closeSpellDial, changeSpell, selectedSpells}) => {
  const content = <SpellDialDial selectedSpells={selectedSpells} closeSpellDial={closeSpellDial} changeSpell={changeSpell}/>
  const left = side === "left" ? content : null
  const right = side === "right" ? content : null

  if (side === null) return side
  return (
    <div className="dial-shadow">
      <div className="dial-wrapper">
        {left}
      </div>
      <div className="dial-wrapper">
        {right}
      </div>
    </div>
  );
};

const SpellDialDial = ({closeSpellDial, changeSpell, selectedSpells}) => {
  const data = selectedSpells.map((spell, idx) => {
    const icon = spell.name ? <SpellIcon icon={spell.icon} name={spell.name}/> : <SpellIconBlocked/>;
    return(
      <button onClick={() => changeSpell(idx)} className={`dial-item dial-item-${idx}`} key={idx}>
        {icon}
      </button>
    )
  });
  return(
    <div className="dial-bg">
      {data}
      <button data-tip="Close" onClick={closeSpellDial} className="dial-center">
        <ReactTooltip
        className="arrow-btn-tooltip"
          delayShow={20}
          delayHide={50}
          place='right'
          border={true} />
      </button>
    </div>
  );
};

function mapStateToProps({selector}) {
  return {
    side: selector.side,
    selectedSpells: selector.selectedSpells
  };
}

const mapDispatchToProps = {
  closeSpellDial,
  changeSpell
}
export default connect(mapStateToProps, mapDispatchToProps)(SpellDial);