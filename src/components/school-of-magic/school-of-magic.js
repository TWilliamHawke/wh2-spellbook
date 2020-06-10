import React from 'react';
import './school-of-magic.scss';
import SpellDial from '../spell-dial';
import Spell from '../spell';

const SchoolOfMagic = ({ school, side }) => {
  const { schoolName, spells } = school;
  
  return (
    <div className="school-main">
      <h2>{schoolName}</h2>
      {spells.map((spell, idx) => {
        return (
          <Spell side={side} spell={spell} key={idx}/>
        )
      })}
      <SpellDial/>
    </div>
  );
};

export default SchoolOfMagic;