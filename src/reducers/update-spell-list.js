const updateSpellList = (state, action) => {
  if(state === undefined) return {
    page: 1,
    loading: true,
    error: false,
    show: false,
    data: {      left: {
      schoolName: 'Lore of Light',
      spells: [
        { name: `Shem's Burning Gaze`,
          descr: 'description',
          icon: 'light_shems_burning_gaze'
        },
        { name: `Pha's Protection`,
          descr: 'description',
          icon: 'light_phas_protection'
        },
        { name: 'Light of Battle',
          descr: 'description',
          icon: 'light_light_of_battle'
        },
        { name: 'Net of Amyntoc',
          descr: 'description',
          icon: 'light_net_of_amyntok'
        },
        { name: `Birona's Timewarp`,
          descr: 'description',
          icon: 'light_bironas_timewarp'
        },
        { name: 'Banishment',
          descr: 'description',
          icon: 'light_banishment'
        },
      ],
    },
    right: {
      schoolName: 'Lore of Hight Magic',
      spells: [
        { name: `Hand of Glory`,
          descr: 'description',
          icon: 'high_magic_hand_of_glory'
        },
        { name: `Apotheosis`,
          descr: 'description',
          icon: 'high_magic_apotheosis'
        },
        { name: `Soul Quench`,
          descr: 'description',
          icon: 'high_magic_soul_quench'
        },
        { name: `Tempest`,
          descr: 'description',
          icon: 'high_magic_tempest'
        },
        { name: `Fiery Convocation`,
          descr: 'description',
          icon: 'high_magic_fiery_convocation'
        },
        { name: `Arcane Unforging`,
          descr: 'description',
          icon: 'high_magic_arcane_unforging'
        },
      ],
    },
}
  }

  const { spellList } = state
  
  switch(action.type) {
    case 'SPELL_SHOW':
      return {
        ...spellList,
        show:true
      }
    case 'SET_PAGE':
      return {
        ...spellList,
        page: action.payload
      }
    
    case 'FETCH_SPELL_SUCCESS':
      return {
        ...spellList,
        data: action.payload,
        loading: false
      };

    case 'FETCH_SPELL_REQUEST':
      return {
        ...spellList,
        loading: true,
        error: false
      };

    case 'FETCH_SPELL_FAILURE':
      return {
        ...spellList,
        loading: false,
        error: true
      }
  
    default:
      return spellList;
  }

}

export default updateSpellList;