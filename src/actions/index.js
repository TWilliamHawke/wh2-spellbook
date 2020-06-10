const spellRequested = () => {
  return {type: 'FETCH_SPELL_REQUEST'}
}

const spellLoaded = (data) => {
  return {type: 'FETCH_SPELL_SUCCESS', payload: data}
}
const spellError = () => {
  return {type: 'FETCH_SPELL_FAILURE'}
}
const showSpell = () => {
  return {type: 'SPELL_SHOW'}
}

const setPage = (page) => {
  return { type: 'SET_PAGE', payload: page }
}
const selectSide = (side, spell) => {
  return { type: 'SPElL_DIAL_OPEN', side, spell }
}
const closeSpellDial = () => {
  return {type: 'SPElL_DIAL_CLOSED'}
}
const changeSpell = index => {
  return {type: "SPELL_CHANGE", payload:index}
}

const fetchSpells = (dispatch) => (newPage, spellbookService) => {
  dispatch(spellRequested());
  spellbookService.getData(newPage)
  .then(data => dispatch(spellLoaded(data)))
  .then(() => dispatch(setPage(newPage)))
  .then(() => dispatch(showSpell()))
  .catch(() => dispatch(spellError()));
}
export {
  spellLoaded,
  selectSide,
  closeSpellDial,
  changeSpell,
  fetchSpells
}
