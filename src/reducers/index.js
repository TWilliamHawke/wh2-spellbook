import updateSpellList from './update-spell-list';
import selectSpell from './select-spell';

const reducer = (state, action) => {

  return {
    spellList: updateSpellList(state, action),
    selector: selectSpell(state, action)
  }
}

export default reducer;