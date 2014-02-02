var cards = [
  new Card("Alpha Stag", "Druid", 3, "", 30, 2611, 846, ["Stag Herder","Wild Pack","Blessed Stag Rider","Druid Warband",]),
  new Card("Angela", "Camelot", 5, "", 50, 7192, 2236, ["Polar",]),
  new Card("Apprentice", "Camelot", 1, "", 10, 1200, 285, ["Noobs",]),
  new Card("Arabel the True", "Camelot", 4, "", 40, 5670, 1370, ["Celestials","Twin Sisters",]),
  new Card("Archmage", "Camelot", 4, "", 40, 6150, 1485, ["Elite Casters","Magicians","Hero Trifecta",]),
  new Card("Armored Warhorse", "Camelot", 3, "", 30, 3320, 808, ["Questing Knight","Blessed Knight Rider","Knight Warband",]),
  new Card("Azarel", "Camelot", 5, "", 50, 9090, 2185, ["Undying","Celestials",]),
  new Card("Balzathor", "Demon", 5, "", 50, 6316, 1974, ["Relentless Evil","Demons",]),
  new Card("Bard", "Camelot", 3, 8, 30, 3333, 818, ["Gifted and Talented","Hero Trifecta","Druid Beats",]),
  new Card("Battlemage", "Camelot", 3, 11, 30, 4622, 1126, ["Gifted and Talented",]),
  new Card("Beastmaster", "Druid", 4, "", 40, 5200, 1611, ["Wanderers","Druid Warband",]),
  new Card("Ben-nu Fireborn", "Druid", 5, "", 50, 7409, 2269, ["Undying","Regeneration","Fire Breathing","Mythic Creatures",]),
  new Card("Berserker", "Druid", 4, "", 40, 4740, 1776, ["Bruisers",]),
  new Card("Black Knight", "Demon", 4, "", 40, 4320, 1368, ["Twin Knights",]),
  new Card("Blacksmith", "Camelot", 2, 8, 20, 2765, 670, ["-",]),
  new Card("Blood Briar", "Druid", 3, 8, 30, 3030, 969, ["Thorny Threat",]),
  new Card("Caradd the Gale", "Druid", 5, "", 50, 6456, 1992, ["Nature's Wrath","Elemental Fury",]),
  new Card("Celestial Lion", "Camelot", 3, 10, 30, 4200, 1013, ["Heroic Beasts",]),
  new Card("Crossbowman", "Camelot", 1, 6, 10, 1800, 440, ["Marksmen","Soldiers",]),
  new Card("Deathcap", "Druid", 2, 7, 20, 2210, 685, ["-",]),
  new Card("Diamond Knight", "Camelot", 5, "", 50, 8583, 2060, ["Suited Up","Defenders",]),
  new Card("Dire Bear", "Druid", 3, 7, 30, 2625, 842, ["Wild Pack",]),
  new Card("Dire Wolf", "Druid", 2, 8, 20, 2545, 780, ["Wild Pack",]),
  new Card("Diviner", "Camelot", 2, 7, 20, 2400, 585, ["-",]),
  new Card("Doomweaver", "Druid", 3, "", 30, 4254, 1320, ["Giant Insects",]),
  new Card("Druid Initiate", "Druid", 1, 3, 10, 765, 245, ["Noobs",]),
  new Card("Druid Marksman", "Druid", 1, 6, 10, 1680, 518, ["Marksmen","Druid Warriors",]),
  new Card("Druid Sage", "Druid", 1, 5, 10, 1375, 425, ["-",]),
  new Card("Druid Scout", "Druid", 1, 3, 10, 750, 250, ["-",]),
  new Card("Druid Warrior", "Druid", 1, 4, 10, 1065, 335, ["Druid Warriors",]),
  new Card("Duelist", "Camelot", 4, "", 40, 6130, 1492, ["Finesse Fighters",]),
  new Card("Earth Elemental", "Druid", 4, "", 40, 6092, 1878, ["Regeneration","Nature's Wrath","Elemental Fury",]),
  new Card("Elder Shaman", "Druid", 4, 13, 40, 5644, 1745, ["Elite Casters","Shamans","Druid Beats",]),
  new Card("Ember Druid", "Druid", 3, 9, 30, 3445, 1080, ["Magicians",]),
  new Card("Enchantress", "Druid", 2, 5, 20, 1580, 490, ["-",]),
  new Card("Father Maleficent", "Demon", 4, 10, "", 3500, 1110, ["Cultists","Twin Clerics",]),
  new Card("Fenric Gore-Claw", "Demon", 5, 13, 50, 5440, 1712, ["Demons",]),
  new Card("Fire Elemental", "Camelot", 4, "", 40, 5000, 1300, ["Summoned Minions","Elemental Fury",]),
  new Card("Footman", "Camelot", 1, 4, 10, 1180, 290, ["Soldiers",]),
  new Card("Galzra", "Druid", 6, "", 60, 10857, 3265, ["Fire Breathing","Elite Force","Epic Serpents","Mythic Creatures",]),
  new Card("Gaznar Soulripper", "Demon", 5, "", 50, 6754, 2105, ["2013 All Stars","Relentless Evil","Unholy Strength","Monster Mash",]),
  new Card("Giant Boar", "Druid", 3, 8, 30, 3016, 966, ["Thick Hides","Wild Pack",]),
  new Card("Giant Eagle", "Camelot", 3, 7, 30, 2860, 707, ["Heroic Beasts",]),
  new Card("Grail Knight", "Camelot", 3, 9, 30, 4060, 880, ["Gods and Heroes","Questing Knight","Blessed Knight Rider","Knight Warband","Hero Trifecta",]),
  new Card("Guardian Angel", "Camelot", 5, "", 50, 6600, 1550, ["Divine Intervention","Celestials","Blessed Knight Rider","Blessed Stag Rider",]),
  new Card("Guinevere", "Camelot", 4, "", 40, 4680, 1144, ["Female Legends",]),
  new Card("Heavy Swordsman", "Camelot", 3, "", 30, 4060, 1020, ["Bruisers",]),
  new Card("Hope", "Camelot", 6, "", 60, 9464, 2224, ["2013 All Stars","Polar",]),
  new Card("Hunter", "Camelot", 1, 5, 10, 1500, 360, ["-",]),
  new Card("Huscarl", "Camelot", 4, "", 50, 4785, 1780, ["-",]),
  new Card("Ice Mage", "Camelot", 3, "", 30, 3766, 910, ["Magicians",]),
  new Card("Kelpie", "Druid", 2, 6, 20, 1905, 585, ["Tide Lurkers",]),
  new Card("Khufu", "Demon", 5, "", 50, 7600, 2546, ["Monster Mash",]),
  new Card("Knight", "Camelot", 2, 7, 20, 2420, 580, ["Soldiers",]),
  new Card("Lady of the Lake", "Camelot", 5, "", 50, 7036, 1694, ["Divine Ladies","Female Legends",]),
  new Card("Longbowman", "Camelot", 2, 6, 20, 2070, 500, ["Marksmen",]),
  new Card("Marble Guardian", "Camelot", 4, "", 40, 6622, 1600, ["Summoned Minions","Defenders","Guardian Constructs",]),
  new Card("Mechanical Knight", "Camelot", 3, "", 30, 4180, 1020, ["Summoned Minions","Guardian Constructs",]),
  new Card("Merlin's Dragon", "Camelot", 5, "", 50, 8065, 1944, ["Fire Breathing","Epic Serpents",]),
  new Card("Mhor the Wyrm", "Druid", 5, "", 50, 6933, 2130, ["Thick Hides","Epic Serpents","Titans",]),
  new Card("Modron", "Demon", 5, "", 50, 4731, 1871, ["Monster Mash",]),
  new Card("Morbius the Cursed", "Demon", 5, "", 50, 5878, 1843, ["Relentless Evil","Unholy Strength",]),
  new Card("Mystic Raven", "Druid", 2, 5, 20, 1565, 495, ["-",]),
  new Card("Nathra Verdaine", "Druid", 5, "", 50, 8367, 2547, ["Ancient Protectors","Forest Guardians","Epic Serpents",]),
  new Card("Necros the Grim", "Demon", 4, 12, 40, 4734, 1491, ["Cultists",]),
  new Card("Ossion the Dread", "Demon", 5, "", 50, 9373, 2873, ["Relentless Evil",]),
  new Card("Paladin", "Camelot", 4, "", 40, 5650, 1376, ["Twin Knights","Suited Up","Holy Men","Healers","Knight Warband",]),
  new Card("Pikeman", "Camelot", 2, 5, 20, 1700, 415, ["Soldiers",]),
  new Card("Primal Warrior", "Druid", 3, "", 30, 3432, 1081, ["Gods and Heroes","Blessed Stag Rider","Druid Warband","Druid Beats",]),
  new Card("Psycho Butterfly", "Druid", 4, 11, 40, 4748, 1480, ["Giant Insects",]),
  new Card("Quillbeast", "Druid", 2, 6, 20, 1890, 590, ["-",]),
  new Card("Ranger", "Druid", 4, "", 40, 4305, 1345, ["Finesse Fighters","Healers","Wanderers",]),
  new Card("Reindeer", "Druid", 1, "", 1, 1, 1, ["-",]),
  new Card("Rhiannon the Fair", "Druid", 6, "", 60, 10306, 3105, ["Gods and Heroes","Nature's Wrath","Gods","Elite Force","Divine Ladies","Female Legends","Healers",]),
  new Card("Sir Galahad", "Camelot", 6, "", 60, 11240, 2640, ["Suited Up","Elite Force",]),
  new Card("Sir Kay", "Camelot", 5, "", 50, 7552, 1818, ["Suited Up",]),
  new Card("Skinchanger", "Druid", 2, 7, 20, 2225, 680, ["Defenders",]),
  new Card("Spy", "Camelot", 1, 3, 10, 830, 205, ["-",]),
  new Card("Squire", "Camelot", 1, 3, 10, 850, 200, ["Questing Knight","Noobs",]),
  new Card("Stone Ancient", "Druid", 4, "", 40, 5656, 1742, ["Ancient Protectors","Defenders","Forest Guardians",]),
  new Card("Stone Fist", "Druid", 5, "", 50, 5440, 2140, ["2013 All Stars","Bruisers",]),
  new Card("Stormcaller", "Druid", 4, "", 40, 5185, 1616, ["Elite Casters",]),
  new Card("Taal", "Camelot", 3, 9, 30, "", "", ["-",]),
  new Card("The Horned Lord", "Druid", 5, "", 50, 5980, 1852, ["Gods","Forest Guardians","Shamans",]),
  new Card("Thorn Witch", "Druid", 3, "", 30, 3855, 1200, ["Regeneration","Thorny Threat",]),
  new Card("Toymaker", "Camelot", 4, "", 40, 4320, 1368, ["Polar",]),
  new Card("Trahern", "Demon", 4, "", 40, 6124, 1973, ["Monster Mash",]),
  new Card("Treekin", "Druid", 5, "", 50, 7885, 2408, ["Nature's Wrath",]),
  new Card("Unicorn", "Camelot", 1, 5, 10, 1480, 365, ["-",]),
  new Card("Vambrael", "Camelot", 6, "", 60, 11830, 2780, ["Divine Intervention","Gods and Heroes","Gods","Celestials","Elite Force",]),
  new Card("Vanguard", "Camelot", 4, "", 40, 4785, 1780, ["Bruisers",]),
  new Card("War Cleric", "Camelot", 3, "", 30, 2841, 706, ["Holy Men","Twin Clerics",]),
  new Card("War Hound", "Camelot", 2, 6, 20, 2050, 505, ["-",]),
  new Card("Warrior Monk", "Camelot", 2, 5, 20, 1680, 420, ["-",]),
  new Card("Water Elemental", "Camelot", 4, 11, 40, 5200, 1250, ["Summoned Minions","Elemental Fury",]),
  new Card("Water Nymph", "Druid", 1, 5, 10, 1360, 430, ["Tide Lurkers",]),
  new Card("Wild Hunt", "Druid", 3, "", 30, 3840, 1202, ["Stag Herder",]),
  new Card("Winter Treekin", "Druid", 4, "", 40, 5440, 1712, ["Polar",]),
  new Card("Wood Nymph", "Druid", 1, 4, 10, 1050, 340, ["-",]),
  new Card("Ysbadden", "Druid", 4, "", 40, 4740, 1480, ["Titans",]),
  new Card("Yzabel the Fallen", "Demon", 5, "", 50, 7630, 2367, ["Twin Sisters",]),
];