import React, { useContext, useEffect } from 'react';
import {connect} from 'react-redux';

import ArrowButton from './arrow-button';
import { SpellbookContext } from '../../contexts';
import {
  spellLoaded,
  fetchSpells
} from '../../actions';

import './page-scroll.scss';

const PageLister = ({ spellLoaded, fetchSpells, page}) => {
  const spellbookService = useContext(SpellbookContext);

  useEffect(() => {
    const data = spellbookService.getFirstPage()
    spellLoaded(data)
  }, [spellLoaded, spellbookService])

  const changePage = (num) => {
    const newPage = page + num;
    fetchSpells(newPage, spellbookService)
  }

  return (
    <div className="page-leaf">
      <ArrowButton changePage={() => changePage(-1)} side="left"/>
      <div className="page-leaf-num">{`${page}/4`}</div>
      <ArrowButton changePage={() => changePage(1)} side="right"/>
    </div>
  );
};

const mapStateToProps = ({spellList}) => {
  return {
    page: spellList.page,
    loading: spellList.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    spellLoaded: data => dispatch(spellLoaded(data)),
    fetchSpells: fetchSpells(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PageLister);