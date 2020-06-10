import React from 'react';
import {connect} from 'react-redux';

import SchoolOfMagic from '../school-of-magic';

import './row.scss';

const Row = ({loading, error, data}) => {
  let rowClass = "rows"
  
  if(loading) {rowClass = "rows rows-hidden"}
  if(error) return (<h1>PAGE NOT FOUND</h1>);
  
  return (
    <div className={rowClass}>
      <SchoolOfMagic side="left" school={data.left}/>
      <SchoolOfMagic side="right" school={data.right}/>
    </div>
  );
};

const mapStateToProps = ({spellList}) => {
  return {
    data: spellList.data,
    loading: spellList.loading,
    error: spellList.error,
  }
}

export default connect(mapStateToProps)(Row);