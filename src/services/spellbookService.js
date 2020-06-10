export default class SpellbookService {
  data = [
    {},
    {
      left: {
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
    },
    {
      left: {
        schoolName: 'Lore of Life',
        spells: [
          { name: `Awakening of the Woods`,
            descr: 'description',
            icon: 'life_awakening_of_the_wood'
          },
          { name: `Earth Blood`,
            descr: 'description',
            icon: 'life_earth_blood'
          },
          { name: `Flesh to Stone`,
            descr: 'description',
            icon: 'life_flesh_to_stone'
          },
          { name: `Shield of Throrns`,
            descr: 'description',
            icon: 'life_shield_of_thorns'
          },
          { name: `Regrowth`,
            descr: 'description',
            icon: 'life_regrowth'
          },
          { name: `The Dwellers Bellow`,
            descr: 'description',
            icon: 'life_the_dwellers_below'
          },
        ],
      },
      right: {
        schoolName: 'Lore of Heaven',
        spells: [
          { name: `Harmonic Convergence`,
            descr: 'description',
            icon: 'heavens_harmonic_convergence'
          },
          { name: `Wind Blast`,
            descr: 'description',
            icon: 'heavens_wind_blast'
          },
          { name: `Urannon's Thunderbolt`,
            descr: 'description',
            icon: 'heavens_urannons_thunderbolt'
          },
          { name: `Curse of Midnight Wind`,
            descr: 'description',
            icon: 'heavens_curse_of_the_midnight_wind'
          },
          { name: `Comet of Casandora`,
            descr: 'description',
            icon: 'heavens_comet_of_casandora'
          },
          { name: `Chain Lightning`,
            descr: 'description',
            icon: 'heavens_chain_lightning'
          },
        ],
      },
    },
    {
      left:     {
        schoolName: 'Lore of Beast',
        spells: [
          { name: `Wyssan's Wildform`,
            descr: 'description',
            icon: 'beasts_wyssans_wildform'
          },
          { name: `Flock of Doom`,
            descr: 'description',
            icon: 'beasts_flock_of_doom'
          },
          { name: `The Amber Spear`,
            descr: 'description',
            icon: 'beasts_the_amber_spear'
          },
          { name: `Pan's Impenetrable Pelt`,
            descr: 'description',
            icon: 'beasts_panns_impenetrable_pelt'
          },
          { name: `The Curse of Anraheir`,
            descr: 'description',
            icon: 'beasts_the_curse_of_anraheir'
          },
          { name: `Transformation of Kadon`,
            descr: 'description',
            icon: 'beasts_transformation_of_kadon'
          },
        ],
      },
      right: {
        schoolName: 'Lore of Fire',
        spells: [
          { name: `Fireball`,
            descr: 'description',
            icon: 'fire_fireball'
          },
          { name: `Cascading Fire Cloack`,
            descr: 'description',
            icon: 'fire_cascading_fire_cloak'
          },
          { name: `Flaming Sword of Rhuin`,
            descr: 'description',
            icon: 'fire_flaming_sword_of_rhuin'
          },
          { name: `The Burning Head`,
            descr: 'description',
            icon: 'fire_the_burning_head'
          },
          { name: `Piercing Bolts of Burning`,
            descr: 'description',
            icon: 'fire_piercing_bolts_of_burning'
          },
          { name: `Flame Storm`,
            descr: 'description',
            icon: 'fire_flame_storm'
          },
        ],
      },
    },
    {
      left:     {
        schoolName: 'Lore of Shadows',
        spells: [
          { name: `Melcoth's Mystifying Miasma`,
            descr: 'description',
            icon: 'shadow_melkoths_mystifying_miasma'
          },
          { name: `The Enfeebling Foe`,
            descr: 'description',
            icon: 'shadow_the_enfeebling_foe'
          },
          { name: `The Withering`,
            descr: 'description',
            icon: 'shadow_the_withering'
          },
          { name: `The Penumbral Pendulum`,
            descr: 'description',
            icon: 'shadow_the_penumbral_pendulum'
          },
          { name: `Okkam's Mindrazor`,
            descr: 'description',
            icon: 'shadow_okkams_mindrazor'
          },
          { name: `Pit of Shades`,
            descr: 'description',
            icon: 'shadow_pit_of_shades'
          },
        ],
      },
      right: {
        schoolName: 'Lore of Death',
        spells: [
          { name: `Aspect of the Dread Knight`,
            descr: 'description',
            icon: 'death_aspect_of_the_dreadknight'
          },
          { name: `Spirit Leech`,
            descr: 'description',
            icon: 'death_spirit_leech'
          },
          { name: `Doom & Darkness`,
            descr: 'description',
            icon: 'death_doom_and_darkness'
          },
          { name: `Soul Blight`,
            descr: 'description',
            icon: 'death_soulblight'
          },
          { name: `The Purple Sun of Xereus`,
            descr: 'description',
            icon: 'death_the_purple_sun_of_xereus'
          },
          { name: `The Fate of Bjuna`,
            descr: 'description',
            icon: 'death_the_fate_of_bjuna'
          },
        ],
      },
    }
  ]

  getData(page) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(page < this.data.length && page > 0) resolve(this.data[page])
        reject(new Error('page not found'))
      }, 600);
    });
  }

  getFirstPage() {
    return this.data[1];
  }
}