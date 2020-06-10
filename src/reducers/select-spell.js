
const selectSpell = (state, action) => {
  if(state === undefined) return {
    selectedSpells: [
      { name: `Apotheosis`,
        descr: 'description',
        icon: 'high_magic_apotheosis'
      },
      { name: `Wind Blast`,
        descr: 'description',
        icon: 'heavens_wind_blast'
      },
      { name: `Flaming Sword of Rhuin`,
        descr: 'description',
        icon: 'fire_flaming_sword_of_rhuin'
      },
      { name: `Fiery Convocation`,
        descr: 'description',
        icon: 'high_magic_fiery_convocation'
      },
      { name: 'Click here to add spell',
        descr: 'description',
        icon: 'spell_dial_spell_frame'
      },
      { name: null,
        descr: 'description',
        icon: null
      },
    ],
    newSpell: null,
    side: null
  }

  const { selector } = state
  switch (action.type) {
    case 'SPELL_SELECTED':
      return selector;
    case 'SPElL_DIAL_OPEN':
      const {side, spell} = action
      return {
        ...selector,
        side,
        newSpell: spell
      };
    case 'SPElL_DIAL_CLOSED':
      return {
        ...selector,
        side: null
      }
    case 'SPELL_CHANGE':
      const { selectedSpells, newSpell } = selector;
      const idx = action.payload;

      const selectedSpellsIcons = selectedSpells.map(
        spell => spell.icon
      )
      if(selectedSpellsIcons.includes(newSpell.icon)) return selector

      const newSpellList = [
        ...selectedSpells.slice(0, idx),
        newSpell,
        ...selectedSpells.slice(idx+1)
      ]

      return {
        ...selector,
        selectedSpells: newSpellList
      }
    default:
      return selector
  }
}

export default selectSpell;