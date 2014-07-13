var cards = [
  new Card("Abnoba", "Druid", 5, "", 50, 7101, 2191, ["Woodland Deities",]),
  new Card("Ageless Scorpion", "Druid", 5, 15, 50, 8085, 2508, ["Desert Guardians","Goliaths","Toxic Death",]),
  new Card("Aleria", "Druid", 5, "", 50, 7740, 1863, ["Umbral Spirits",]),
  new Card("Alpha Stag", "Druid", 3, 7, 30, 2611, 846, ["Stag Herder","Wild Pack","Blessed Stag Rider","Druid Warband","Stag Pack",]),
  new Card("Amythestine", "Druid", 5, 18, 50, 6754, 2105, ["Umbral Spirits",]),
  new Card("Ancient Archelon", "Druid", 5, "", 50, 8131, 2436, ["Behemoths","Goliaths",]),
  new Card("Angel of Law", "Camelot", 5, "", 50, 7740, 1863, ["Merciful Angels","Blessings of Fate",]),
  new Card("Angela", "Camelot", 5, "", 50, 7192, 2236, ["Polar",]),
  new Card("Apprentice", "Camelot", 1, 4, 10, 1200, 285, ["Noobs",]),
  new Card("Arabel the True", "Camelot", 4, "", 40, 5670, 1370, ["Celestials","Twin Sisters",]),
  new Card("Arcane Archer", "Camelot", 5, 18, 50, 7740, 1863, ["Raw Firepower","Enchanted Weapons","Free Spirits","Pet Familiars","Assassin's Alliance",]),
  new Card("Archivist", "Camelot", 4, "", 40, 5320, 1368, ["Wise Sages","Burst Damage","Warrior Poets","Premeditation","Travelers",]),
  new Card("Archmage", "Camelot", 4, 13, 40, 6150, 1485, ["Elite Casters","Magicians","Hero Trifecta","Raw Firepower","Assault Team","Burst Damage","Thunder's Fury",]),
  new Card("Archmage Rhobin", "Camelot", 4, "", 40, 6502, 1703, ["Travelers",]),
  new Card("Arial", "Druid", 6, 20, 60, 10857, 3265, ["Druid Elite","Heavy Cavalry","Generals","Cunning Foes","Free Spirits","Savage Elite",]),
  new Card("Arial's Champion", "Druid", 5, "", 50, 9090, 2185, ["Druid Elite","Royal Bodyguards",]),
  new Card("Armored Warhorse", "Camelot", 3, 8, 30, 3320, 808, ["Questing Knight","Blessed Knight Rider","Knight Warband",]),
  new Card("Assassin", "Camelot", 4, "", 40, 4320, 1368, ["Cold Killers","Killers for Hire","Assassin's Alliance",]),
  new Card("Astrologist", "Camelot", 4, 13, 40, 5320, 1368, ["Travelers",]),
  new Card("Azarel", "Camelot", 5, 18, 50, 9090, 2185, ["Undying","Celestials","Righteous Fury","Blessings of Fate",]),
  new Card("Bald Eagle", "Druid", 5, 18, 50, 7630, 2367, ["Patriots",]),
  new Card("Balzathor", "Demon", 5, "", 50, 6316, 1974, ["Relentless Evil","Demons","Core Dwellers","Pet Familiars",]),
  new Card("Bard", "Camelot", 3, 8, 30, 3333, 818, ["Gifted and Talented","Hero Trifecta","Druid Beats","Martial Music",]),
  new Card("Battlemage", "Camelot", 3, 11, 30, 4622, 1126, ["Gifted and Talented",]),
  new Card("Beastmaster", "Druid", 4, 12, 40, 5200, 1611, ["Wanderers","Druid Warband","Feral Pack",]),
  new Card("Ben-nu Fireborn", "Druid", 5, "", 50, 7409, 2269, ["Undying","Regeneration","Fire Breathing","Mythic Creatures","Immortals","Burning Wrath","Phoenix Fury",]),
  new Card("Ben-nu Frostborn", "Druid", 5, "", 50, 11223, 2213, ["Phoenix Fury","Frozen Terrors",]),
  new Card("Ben-nu Hellborn", "Camelot", 6, "", 60, 12875, 3144, ["Phoenix Fury","Aerial Doom",]),
  new Card("Ben-nu Skyborn", "Druid", 5, "", 50, 10452, 2765, ["Phoenix Fury","Fury of the Skies",]),
  new Card("Berserker", "Druid", 4, "", 40, 4740, 1776, ["Bruisers","Brute Force","Tribal Fury",]),
  new Card("Black Knight", "Demon", 4, "", 40, 4320, 1368, ["Twin Knights","Enigmatic Knights","Generals",]),
  new Card("Blacksmith", "Camelot", 2, 8, 20, 2765, 670, []),
  new Card("Blademaster", "Camelot", 5, "", 50, 7885, 2508, ["Augmented Arms","Hot Blooded","Back to Back","Disciplined","Final Stand",]),
  new Card("Blood Briar", "Druid", 3, 8, 30, 3030, 969, ["Thorny Threat",]),
  new Card("Bourgard", "Demon", 4, "", 40, 4320, 1368, ["King Size Weapons","Hooded Terrors","Body Count",]),
  new Card("Butcher of Princes", "Demon", 5, "", 50, 9999, 2222, ["Body Count",]),
  new Card("Caradd the Gale", "Druid", 5, "", 50, 6456, 1992, ["Nature's Wrath","Elemental Fury","Fury of the Skies","Thunder's Fury",]),
  new Card("Celestial Lion", "Camelot", 3, 10, 30, 4200, 1013, ["Heroic Beasts",]),
  new Card("Cernunnos", "Druid", 5, 18, 50, 7740, 1863, ["Umbral Spirits","Stag Pack",]),
  new Card("Chastity", "Demon", 5, "", 50, 9877, 3024, ["Thirst of Night",]),
  new Card("Cockatrice", "Druid", 4, 10, 40, 4296, 1349, ["Hybrid Beasts","Toxic Death",]),
  new Card("Crossbowman", "Camelot", 1, 6, 10, 1800, 440, ["Marksmen","Soldiers",]),
  new Card("Death", "Demon", 6, "", 60, 12830, 2780, ["Four Horsemen","Pure Evil","Opposite Ends",]),
  new Card("Deathcap", "Druid", 2, 7, 20, 2210, 685, []),
  new Card("Desdemona", "Demon", 5, "", 50, 7124, 2431, ["Undead Party","Dark Arts","Corrupted",]),
  new Card("Diamond Knight", "Camelot", 5, "", 50, 8583, 2060, ["Suited Up","Defenders","Fearless Fighters",]),
  new Card("Dire Bear", "Druid", 3, 7, 30, 2625, 842, ["Wild Pack","Feral Pack",]),
  new Card("Dire Wolf", "Druid", 2, 8, 20, 2545, 780, ["Wild Pack",]),
  new Card("Diviner", "Camelot", 2, 7, 20, 2400, 585, []),
  new Card("Doomweaver", "Druid", 3, 11, 30, 4254, 1320, ["Giant Insects",]),
  new Card("Dragon Knight", "Camelot", 4, "", 40, 4785, 1548, ["Dragon's Blood",]),
  new Card("Druantia", "Druid", 6, 20, 60, 11336, 3415, ["Woodland Deities","Nature Magic","Immortals","Wise Sages",]),
  new Card("Druid Initiate", "Druid", 1, 3, 10, 765, 245, ["Noobs",]),
  new Card("Druid Marksman", "Druid", 1, 6, 10, 1680, 518, ["Marksmen","Druid Warriors",]),
  new Card("Druid Sage", "Druid", 1, 5, 10, 1375, 425, []),
  new Card("Druid Scout", "Druid", 1, 3, 10, 750, 250, []),
  new Card("Druid Warrior", "Druid", 1, 4, 10, 1065, 335, ["Druid Warriors",]),
  new Card("Drust Mac Erp", "Druid", 6, "", 60, 11930, 3380, ["Champions","Savage Elite","Ultimate Fighters",]),
  new Card("Duelist", "Camelot", 4, "", 40, 6130, 1492, ["Finesse Fighters",]),
  new Card("Earth Elemental", "Druid", 4, "", 40, 6092, 1878, ["Regeneration","Nature's Wrath","Elemental Fury",]),
  new Card("Earth Mother", "Druid", 5, 20, 50, 9090, 2185, ["Unstoppable Force","Earthen Might",]),
  new Card("Eira Storm", "Druid", 4, "", 40, 6012, 1305, ["Thunder's Fury",]),
  new Card("Elder Shaman", "Druid", 4, 13, 40, 5644, 1745, ["Elite Casters","Shamans","Druid Beats","Theurgists","Travelers",]),
  new Card("Ember Druid", "Druid", 3, 9, 30, 3445, 1080, ["Magicians","Burning Wrath",]),
  new Card("Enchantress", "Druid", 2, 5, 20, 1580, 490, []),
  new Card("Famine", "Demon", 5, 24, 50, 9600, 2546, ["Four Horsemen","Beyond Redemption",]),
  new Card("Father Beneficent", "Camelot", 5, "", 50, 9090, 2185, ["Fallen Heroes","Righteous Fury","Warrior Poets",]),
  new Card("Father Maleficent", "Demon", 3, 10, 30, 3500, 1110, ["Cultists","Twin Clerics","Beyond Redemption",]),
  new Card("Fenric Gore-Claw", "Demon", 5, 13, 50, 5440, 1712, ["Demons",]),
  new Card("Fire Elemental", "Camelot", 4, 11, 40, 5000, 1300, ["Summoned Minions","Elemental Fury","Burning Wrath","Core Dwellers",]),
  new Card("Footman", "Camelot", 1, 4, 10, 1180, 290, ["Soldiers",]),
  new Card("Galzra", "Druid", 6, 20, 60, 10857, 3265, ["Fire Breathing","Elite Force","Epic Serpents","Mythic Creatures","Behemoths","Unstoppable Force",]),
  new Card("Gawain's Guard", "Camelot", 5, 16, 50, 7852, 2018, ["Royal Bodyguards","Lords and Guards","Disciplined",]),
  new Card("Gaznar Soulripper", "Demon", 5, "", 50, 6754, 2105, ["2013 All Stars","Relentless Evil","Unholy Strength","Monster Mash","Aerial Doom","Pure Evil","Opposite Ends",]),
  new Card("General Morbius", "Camelot", 5, "", 50, 8265, 2144, ["Fallen Heroes","Generals",]),
  new Card("Giant Boar", "Druid", 3, 8, 30, 3016, 966, ["Thick Hides","Wild Pack","Feral Pack",]),
  new Card("Giant Eagle", "Camelot", 3, 7, 30, 2860, 707, ["Heroic Beasts",]),
  new Card("Grail Knight", "Camelot", 3, 9, 30, 4060, 880, ["Gods and Heroes","Questing Knight","Blessed Knight Rider","Knight Warband","Hero Trifecta",]),
  new Card("Gravebane", "Demon", 5, "", 50, 8265, 2346, ["Bone Spirit","Undead Party","Burning Wrath",]),
  new Card("Green Knight", "Camelot", 6, 20, 60, 11240, 2640, ["Enigmatic Knights","Cold Killers","Cunning Foes","Shining Armor","Crack Knights",]),
  new Card("Grillmaster", "Camelot", 4, 11, 40, 4734, 1491, ["Patriots",]),
  new Card("Gryphon", "Camelot", 4, 10, 40, 4686, 1138, ["Hybrid Beasts",]),
  new Card("Guardian Angel", "Camelot", 5, 13, 50, 6600, 1550, ["Divine Intervention","Celestials","Blessed Knight Rider","Blessed Stag Rider","Merciful Angels",]),
  new Card("Guinevere", "Camelot", 4, "", 40, 4680, 1144, ["Female Legends",]),
  new Card("Heavy Swordsman", "Camelot", 3, "", 30, 4060, 1020, ["Bruisers",]),
  new Card("Highlander", "Camelot", 5, "", 50, 7685, 2608, ["Mercenaries","King Size Weapons","Hired Steel",]),
  new Card("Hope", "Camelot", 6, "", 60, 9464, 2224, ["2013 All Stars","Polar","Merciful Angels","Blessings of Fate","Opposite Ends",]),
  new Card("Horn of Broceliande", "Druid", 5, "", 50, 7879, 2269, ["Martial Music","Tribal Fury",]),
  new Card("Hunter", "Camelot", 1, 5, 10, 1500, 360, []),
  new Card("Huscarl", "Camelot", 4, 15, 50, 4785, 1780, ["Mercenaries","Hired Steel",]),
  new Card("Ice Mage", "Camelot", 3, 9, 30, 3766, 910, ["Magicians","Frozen Terrors","Thunder's Fury",]),
  new Card("Ironbark Overlord", "Druid", 6, 20, 50, 10306, 3105, ["Living Forest","Unstoppable Force",]),
  new Card("Jezebel the Fair", "Camelot", 5, 14, 50, 7036, 1694, ["Fallen Heroes",]),
  new Card("Jezebel the Shriek", "Demon", 5, "", 50, 10306, 3105, ["Dark Arts","Corrupted","Aerial Doom","Beyond Redemption","League of the Damned",]),
  new Card("Karn", "Demon", 5, "", 50, 7025, 2213, ["Bone Spirit","Undead Party","Necro Party",]),
  new Card("Kel Earthbringer", "Druid", 6, 20, 60, 11330, 3480, ["Strength of Will","Geomancers",]),
  new Card("Kelley", "Camelot", 5, 16, 50, 8131, 2436, ["Lords and Guards","Hot Blooded","Fearless Fighters","Final Stand",]),
  new Card("Kelpie", "Druid", 2, 6, 20, 1905, 585, ["Tide Lurkers",]),
  new Card("Khufu", "Demon", 5, "", 50, 7600, 2546, ["Monster Mash",]),
  new Card("King's Guard", "Camelot", 6, 20, 60, 11830, 2780, ["Heavy Cavalry","Royal Bodyguards","Shining Armor","Jack of all Trades","Ultimate Fighters","Crack Knights",]),
  new Card("Knight", "Camelot", 2, 7, 20, 2420, 580, ["Soldiers",]),
  new Card("Knight of the Rose", "Camelot", 5, 16, 50, 8265, 2144, ["Romantic Knights",]),
  new Card("Lady of the Lake", "Camelot", 5, 14, 50, 7036, 1694, ["Divine Ladies","Female Legends","Blessings of Fate",]),
  new Card("Lapis Knight", "Camelot", 6, "", 60, 11003, 3504, ["Crack Knights",]),
  new Card("Longbowman", "Camelot", 2, 6, 20, 2070, 500, ["Marksmen",]),
  new Card("Lord Stonebrand", "Druid", 4, "", 40, 5301, 2105, ["Rock and Troll",]),
  new Card("Lyrist", "Camelot", 5, "", 50, 7213, 2050, ["Merciful Angels","Martial Music",]),
  new Card("Maiden Exemplar", "Camelot", 5, 17, 50, 8583, 2060, ["Heavy Cavalry","Generals","Shining Armor","Jack of all Trades","Free Spirits",]),
  new Card("Mammoth Beetle", "Druid", 5, "", 50, 8131, 2436, ["Behemoths","Core Dwellers","Goliaths",]),
  new Card("Mara of the Sand", "Druid", 6, 22, 60, 11330, 4013, ["Geomancers","Inner Circle","Desert Guardians",]),
  new Card("Marble Guardian", "Camelot", 4, "", 40, 6622, 1600, ["Summoned Minions","Defenders","Guardian Constructs","Earthen Might",]),
  new Card("Mechanical Knight", "Camelot", 3, 10, 30, 4180, 1020, ["Summoned Minions","Guardian Constructs",]),
  new Card("Merla the Lidless", "Druid", 5, "", 50, 7440, 2312, ["Umbral Spirits","Premeditation",]),
  new Card("Merlin's Dragon", "Camelot", 5, 16, 50, 8065, 1944, ["Fire Breathing","Epic Serpents","Dragon's Blood",]),
  new Card("Mhor the Wyrm", "Druid", 5, 15, 50, 6933, 2130, ["Thick Hides","Epic Serpents","Titans","Wyrm Duo","Unstoppable Force","Goliaths",]),
  new Card("Mist Stalker", "Druid", 5, 17, 50, 7885, 2408, ["Cold Killers","Hooded Terrors","Killers for Hire","Assassin's Alliance",]),
  new Card("Modron", "Demon", 5, "", 50, 4731, 1871, ["Monster Mash",]),
  new Card("Morbius the Cursed", "Demon", 5, "", 50, 5878, 1843, ["Relentless Evil","Unholy Strength","Bone Spirit","Undead Party","Beyond Redemption","League of the Damned",]),
  new Card("Moria", "Camelot", 5, "", 50, 8013, 2654, ["Augmented Arms","Pet Familiars",]),
  new Card("Myrddin", "Druid", 6, "", 60, 9877, 3024, ["Mystics","Theurgists","Nature Magic","Wise Sages","Inner Circle",]),
  new Card("Mystic Raven", "Druid", 2, 5, 20, 1565, 495, []),
  new Card("Nathra Verdaine", "Druid", 5, 18, 50, 8367, 2547, ["Ancient Protectors","Forest Guardians","Epic Serpents","Dragon's Blood",]),
  new Card("Necros the Grim", "Demon", 4, 12, 40, 4734, 1491, ["Cultists","Necromancers","Dark Arts","Warrior Poets","Necro Party",]),
  new Card("Odo the Infernal", "Demon", 4, "", 40, 5734, 1491, ["Necro Party",]),
  new Card("Ossion the Dread", "Demon", 6, "", 60, 12930, 3080, ["Relentless Evil","Hooded Terrors","Necromancers","Immortals","Dark Arts","Pure Evil","League of the Damned",]),
  new Card("Paladin", "Camelot", 4, 12, 40, 5650, 1376, ["Twin Knights","Suited Up","Holy Men","Healers","Knight Warband","Assault Team",]),
  new Card("Patriotic Donkey", "Camelot", 1, 20, 1, 1, 1, []),
  new Card("Pestilence", "Demon", 5, 23, 50, 9877, 2524, ["Four Horsemen","Toxic Death","Body Count",]),
  new Card("Phantom Panther", "Druid", 4, "", 40, 5200, 1711, ["On the Hunt","Feral Pack",]),
  new Card("Pikeman", "Camelot", 2, 5, 20, 1700, 415, ["Soldiers",]),
  new Card("Primal Rider", "Druid", 5, 15, 50, 7392, 2436, ["Druid Elite","Heavy Cavalry","Savage Elite",]),
  new Card("Primal Warrior", "Druid", 3, 9, 30, 3432, 1081, ["Gods and Heroes","Blessed Stag Rider","Druid Warband","Druid Beats",]),
  new Card("Psycho Butterfly", "Druid", 4, 11, 40, 4748, 1480, ["Giant Insects",]),
  new Card("Quillbeast", "Druid", 2, 6, 20, 1890, 590, []),
  new Card("Ranger", "Druid", 4, 10, 40, 4305, 1345, ["Finesse Fighters","Healers","Wanderers","On the Hunt",]),
  new Card("Reindeer", "Druid", 1, "", 1, 1, 1, []),
  new Card("Rhiannon the Fair", "Druid", 6, 19, 60, 10306, 3105, ["Gods and Heroes","Nature's Wrath","Gods","Elite Force","Divine Ladies","Female Legends","Healers",]),
  new Card("Rogue Outlaw", "Camelot", 5, 16, 50, 9013, 2480, ["Jack of all Trades","Free Spirits","Killers for Hire",]),
  new Card("Ruibh the Wyrm", "Druid", 5, "", 50, 6933, 2130, ["Wyrm Duo","Toxic Death",]),
  new Card("Shanke", "Camelot", 4, "", 40, 5511, 2032, ["Assassin's Alliance",]),
  new Card("Silverheart", "Demon", 6, "", 60, 12930, 3080, ["Frozen Terrors","Pet Familiars",]),
  new Card("Sir Galahad", "Camelot", 6, 19, 60, 11240, 2640, ["Suited Up","Elite Force","Lords and Guards","Fearless Fighters","Champions",]),
  new Card("Sir Kay", "Camelot", 5, "", 50, 7552, 1818, ["Suited Up","Hot Blooded","Fearless Fighters",]),
  new Card("Sir Valamir", "Demon", 5, "", 50, 9877, 3024, ["Corrupted","Pure Evil","Thirst of Night",]),
  new Card("Skinchanger", "Druid", 2, 7, 20, 2225, 680, ["Defenders",]),
  new Card("Soulbane", "Demon", 4, "", 40, 4732, 1991, ["Necro Party",]),
  new Card("Spy", "Camelot", 1, 3, 10, 830, 205, []),
  new Card("Squire", "Camelot", 1, 3, 10, 850, 200, ["Questing Knight","Noobs",]),
  new Card("Stone Ancient", "Druid", 4, "", 40, 5656, 1742, ["Ancient Protectors","Defenders","Forest Guardians","Earthen Might","Rock and Troll",]),
  new Card("Stone Fist", "Druid", 5, 14, 50, 5440, 2140, ["2013 All Stars","Bruisers","Brute Force","Tribal Fury","Savage Elite","Rock and Troll",]),
  new Card("Stormcaller", "Druid", 4, 12, 40, 5185, 1616, ["Elite Casters","Burst Damage",]),
  new Card("Sun Mage", "Druid", 4, 13, 40, 5546, 1429, ["Raw Firepower","Nature Magic","Inner Circle",]),
  new Card("Sword Summoner", "Camelot", 5, "", 50, 8531, 2436, ["Strength of Will","Lords and Guards",]),
  new Card("Taal", "Camelot", 3, 9, 30, "", "", []),
  new Card("Telekinetic", "Camelot", 4, "", 40, 5013, 1512, ["Strength of Will",]),
  new Card("Terraheart", "Demon", 5, 24, 50, 9141, 1865, ["Earthen Might","Core Dwellers","Geomancers","Desert Guardians",]),
  new Card("The Horned Lord", "Druid", 5, 13, 50, 5980, 1852, ["Gods","Forest Guardians","Shamans","Theurgists","Stag Pack",]),
  new Card("The Prophet", "Camelot", 5, 15, 50, 6600, 1550, ["Mystics","Cunning Foes","Wise Sages","Premeditation",]),
  new Card("Thorn Witch", "Druid", 3, 10, 30, 3855, 1200, ["Regeneration","Thorny Threat",]),
  new Card("Totem Guard", "Druid", 6, "", 60, 10857, 3265, ["Druid Elite","Brute Force","King Size Weapons","Enchanted Weapons","Final Stand","Champions",]),
  new Card("Toymaker", "Camelot", 4, "", 40, 4320, 1368, ["Polar",]),
  new Card("Trahern", "Demon", 4, "", 40, 6124, 1973, ["Monster Mash",]),
  new Card("Treehound", "Druid", 6, 21, 50, 10857, 3265, ["Living Forest","Cold Killers","Cunning Foes",]),
  new Card("Treekin", "Druid", 5, "", 50, 7885, 2408, ["Nature's Wrath","Living Forest",]),
  new Card("Treekin Shaman", "Druid", 5, "", 50, 8065, 1944, ["Living Forest","Theurgists","Nature Magic",]),
  new Card("Ulster Knight", "Camelot", 4, "", 40, 5670, 1370, ["Mercenaries","Hired Steel",]),
  new Card("Unicorn", "Camelot", 1, 5, 10, 1480, 365, []),
  new Card("Vambrael", "Camelot", 6, 20, 60, 11830, 2780, ["Divine Intervention","Gods and Heroes","Gods","Celestials","Elite Force","Righteous Fury",]),
  new Card("Vanguard", "Camelot", 4, "", 40, 4785, 1780, ["Bruisers","Assault Team","Burst Damage",]),
  new Card("Veteran Paladin", "Camelot", 6, "", 60, 10857, 3565, ["Jack of all Trades","Augmented Arms","Hot Blooded",]),
  new Card("Violet Knight", "Camelot", 5, 17, 50, 8765, 1944, ["Romantic Knights","Enchanted Weapons",]),
  new Card("Vortigern", "Demon", 6, "", 60, 11830, 2780, ["League of the Damned",]),
  new Card("War", "Demon", 6, "", 60, 11341, 3465, ["Four Horsemen","Ultimate Fighters",]),
  new Card("War Cleric", "Camelot", 3, 7, 30, 2841, 706, ["Holy Men","Twin Clerics",]),
  new Card("War Drummer", "Druid", 5, "", 50, 7409, 2269, ["Martial Music","Tribal Fury",]),
  new Card("War Hound", "Camelot", 2, 6, 20, 2050, 505, []),
  new Card("Warrior Monk", "Camelot", 2, 5, 20, 1680, 420, []),
  new Card("Water Elemental", "Camelot", 4, 11, 40, 5200, 1250, ["Summoned Minions","Elemental Fury",]),
  new Card("Water Nymph", "Druid", 1, 5, 10, 1360, 430, ["Tide Lurkers",]),
  new Card("Weapon Master", "Camelot", 6, "", 60, 11240, 3040, ["Augmented Arms","Hired Steel","Back to Back","Final Stand","Champions",]),
  new Card("White Knight", "Camelot", 6, "", 50, 13013, 3058, ["Fallen Heroes","Enigmatic Knights","Righteous Fury","Shining Armor","Opposite Ends","Crack Knights",]),
  new Card("Wild Hunt", "Druid", 3, "", 30, 3840, 1202, ["Stag Herder","Stag Pack",]),
  new Card("Winter Treekin", "Druid", 4, 15, 40, 5440, 1712, ["Polar",]),
  new Card("Wood Nymph", "Druid", 1, 4, 10, 1050, 340, []),
  new Card("Ysbadden", "Druid", 4, 11, 40, 4740, 1480, ["Titans",]),
  new Card("Yzabel the Fallen", "Demon", 5, "", 50, 7630, 2367, ["Twin Sisters","Corrupted","Aerial Doom",]),
]
