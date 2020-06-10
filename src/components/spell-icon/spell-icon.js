import React from 'react';
import ReactTooltip from 'react-tooltip'

import './spell-icon.scss';

const SpellIcon = ({ icon, name }) => {
  const iconPath = require(`./img/${icon}.png`)
  return (
        <div className="spell-icon "  style={{
          backgroundImage: `url(${iconPath})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="spell-icon-frame">
            <div data-tip data-for={icon}  className="spell-icon-hover"></div>
          </div>
          <ReactTooltip 
            delayShow={20}
            delayHide={50}
            place='right'
            border={true} 
            className="arrow-btn-tooltip"
            id={icon}>
            {name}
          </ReactTooltip>

        </div>
  );
};

export default SpellIcon;