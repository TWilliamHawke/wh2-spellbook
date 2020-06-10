import React from 'react';
import ReactTooltip from 'react-tooltip';

import './spell-icon-blocked.scss';

const SpellIconBlocked = () => {
  return (
    <div className="spell-frame-grey">
      <div data-tip="Unlocked after level 10" className="spell-chain"></div>
      <ReactTooltip 
          delayShow={20}
          delayHide={50}
          place='right'
          border={true} />
    </div>
  );
};

export default SpellIconBlocked;