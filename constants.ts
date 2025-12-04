
import { Build, OreData, ModifierData, MutationRecipe, Rarity, MutationStat } from './types';

export const ORE_DATABASE: Record<string, OreData> = {
  // Exotic
  "Voidstone": { name: "Voidstone", rarity: "Exotic", minKg: 20, buffType: "Luck, Capacity", maxBuff: "0.4x, 0.4x" },
  "Vineheart": { name: "Vineheart", rarity: "Exotic", minKg: 40, buffType: "Luck", maxBuff: "0.8x" },
  "Cryonic Artifact": { name: "Cryonic Artifact", rarity: "Exotic", minKg: 20, buffType: "Dig Strength/Shake", maxBuff: "1.2x, 1.2x" },
  "Bloodstone": { name: "Bloodstone", rarity: "Exotic", minKg: 40, buffType: "Size Boost", maxBuff: "0.56x" },
  "Pumpkin Soul": { name: "Pumpkin Soul", rarity: "Exotic", minKg: 40, buffType: "Size Boost", maxBuff: "0.56x" },
  "Dinosaur Skull": { name: "Dinosaur Skull", rarity: "Exotic", minKg: 100, buffType: "Size/Sell Boost", maxBuff: "0.32x, 0.4x" },
  "Astral Spore": { name: "Astral Spore", rarity: "Exotic", minKg: 20, buffType: "Dig Speed", maxBuff: "0.8x" },
  "Umbrite": { name: "Umbrite", rarity: "Exotic", minKg: 30, buffType: "Dig/Shake Speed", maxBuff: "0.4x" },
  
  // Mythic
  "Flarebloom": { name: "Flarebloom", rarity: "Mythic", minKg: 21, buffType: "Luck", maxBuff: "0.75x" },
  "Inferlume": { name: "Inferlume", rarity: "Mythic", minKg: 20, buffType: "Luck", maxBuff: "0.5x" },
  "Pink Diamond": { name: "Pink Diamond", rarity: "Mythic", minKg: 20, buffType: "Luck", maxBuff: "0.5x" },
  "Chrysoberyl": { name: "Chrysoberyl", rarity: "Mythic", minKg: 21, buffType: "Luck", maxBuff: "0.5x" },
  "Vortessence": { name: "Vortessence", rarity: "Mythic", minKg: 20, buffType: "Capacity", maxBuff: "0.5x" },
  "Painite": { name: "Painite", rarity: "Mythic", minKg: 20, buffType: "Size Boost", maxBuff: "0.35x" },
  "Star Garnet": { name: "Star Garnet", rarity: "Mythic", minKg: 20, buffType: "Size Boost", maxBuff: "0.35x" },
  "Red Beryl": { name: "Red Beryl", rarity: "Mythic", minKg: 20, buffType: "Size Boost", maxBuff: "0.35x" },
  "Prismara": { name: "Prismara", rarity: "Mythic", minKg: 20, buffType: "All Stats", maxBuff: "0.25x each" },
  "Mythril": { name: "Mythril", rarity: "Mythic", minKg: 60, buffType: "Shake Strength", maxBuff: "0.5x" },
  "Volcanic Core": { name: "Volcanic Core", rarity: "Mythic", minKg: 20, buffType: "Dig/Size", maxBuff: "0.25x, 0.2x" },
  "Frostshard": { name: "Frostshard", rarity: "Mythic", minKg: 20, buffType: "Dig Strength", maxBuff: "0.5x" },
  "Radiant Gold": { name: "Radiant Gold", rarity: "Mythic", minKg: 60, buffType: "Sell Boost", maxBuff: "0.5x" },

  // Legendary
  "Luminum": { name: "Luminum", rarity: "Legendary", minKg: 40, buffType: "Capacity", maxBuff: "0.3x" },
  "Catseye": { name: "Catseye", rarity: "Legendary", minKg: 20, buffType: "Capacity", maxBuff: "0.3x" },
  "Firefly Stone": { name: "Firefly Stone", rarity: "Legendary", minKg: 60, buffType: "Capacity", maxBuff: "0.3x" },
  "Diamond": { name: "Diamond", rarity: "Legendary", minKg: 20, buffType: "Luck", maxBuff: "0.3x" },
  "Dragon Bone": { name: "Dragon Bone", rarity: "Legendary", minKg: 50, buffType: "Size Boost", maxBuff: "0.21x" },
  "Cinnabar": { name: "Cinnabar", rarity: "Legendary", minKg: 20, buffType: "Size Boost", maxBuff: "0.21x" },
  "Volcanic Key": { name: "Volcanic Key", rarity: "Legendary", minKg: 20, buffType: "Size Boost", maxBuff: "0.21x" },
  "Fire Opal": { name: "Fire Opal", rarity: "Legendary", minKg: 20, buffType: "Size Boost", maxBuff: "0.21x" },
  "Rose Gold": { name: "Rose Gold", rarity: "Legendary", minKg: 40, buffType: "Shake Strength", maxBuff: "0.3x" },
  "Starshine": { name: "Starshine", rarity: "Legendary", minKg: 20, buffType: "Dig/Shake", maxBuff: "0.15x" },
  "Specterite": { name: "Specterite", rarity: "Legendary", minKg: 10, buffType: "Shake Speed", maxBuff: "0.3x" },
  "Aetherite": { name: "Aetherite", rarity: "Legendary", minKg: 20, buffType: "Dig Speed", maxBuff: "0.3x" },
  "Aquamarine": { name: "Aquamarine", rarity: "Legendary", minKg: 20, buffType: "Dig Speed", maxBuff: "0.3x" },
  "Lost Soul": { name: "Lost Soul", rarity: "Legendary", minKg: 20, buffType: "Dig Speed", maxBuff: "0.3x" },
  "Gloomcap": { name: "Gloomcap", rarity: "Legendary", minKg: 20, buffType: "Dig Speed", maxBuff: "0.3x" },
  "Bismuth": { name: "Bismuth", rarity: "Legendary", minKg: 78, buffType: "Dig Speed", maxBuff: "0.3x" },
  "Uranium": { name: "Uranium", rarity: "Legendary", minKg: 59, buffType: "Modifier Boost", maxBuff: "0.3x" },
  "Tourmaline": { name: "Tourmaline", rarity: "Legendary", minKg: 25, buffType: "Sell Boost", maxBuff: "0.3x" },
  "Palladium": { name: "Palladium", rarity: "Legendary", minKg: 40, buffType: "Sell Boost", maxBuff: "0.3x" },

  // Epic
  "Emerald": { name: "Emerald", rarity: "Epic", minKg: 20, buffType: "Luck", maxBuff: "0.2x" },
  "Mercury": { name: "Mercury", rarity: "Epic", minKg: 76, buffType: "Shake Strength", maxBuff: "0.2x" },
  "Opal": { name: "Opal", rarity: "Epic", minKg: 20, buffType: "Shake Speed", maxBuff: "0.2x" },
  "Ammonite Fossil": { name: "Ammonite Fossil", rarity: "Epic", minKg: 49, buffType: "Capacity", maxBuff: "0.2x" },
  "Golden Pearl": { name: "Golden Pearl", rarity: "Epic", minKg: 19, buffType: "Capacity", maxBuff: "0.2x" },
  "Osmium": { name: "Osmium", rarity: "Epic", minKg: 80, buffType: "Size Boost", maxBuff: "0.2x" },
  "Bone": { name: "Bone", rarity: "Epic", minKg: 47, buffType: "Size Boost", maxBuff: "0.14x" },
  "Ashvein": { name: "Ashvein", rarity: "Epic", minKg: 20, buffType: "Size Boost", maxBuff: "0.14x" },
  "Moonstone": { name: "Moonstone", rarity: "Epic", minKg: 48, buffType: "Shake Speed", maxBuff: "0.2x" },
  "Aurorite": { name: "Aurorite", rarity: "Epic", minKg: 30, buffType: "Dig Speed", maxBuff: "0.2x" },
  "Borealite": { name: "Borealite", rarity: "Epic", minKg: 20, buffType: "Dig Speed", maxBuff: "0.2x" },
  "Cobalt": { name: "Cobalt", rarity: "Epic", minKg: 38, buffType: "Dig Speed", maxBuff: "0.2x" },
  "Iridium": { name: "Iridium", rarity: "Epic", minKg: 40, buffType: "Dig Speed", maxBuff: "0.2x" },
  "Lightshard": { name: "Lightshard", rarity: "Epic", minKg: 20, buffType: "Dig Speed", maxBuff: "0.2x" },
  "Glowmoss": { name: "Glowmoss", rarity: "Epic", minKg: 60, buffType: "Modifier Boost", maxBuff: "0.2x" },
  "Pyronium": { name: "Pyronium", rarity: "Epic", minKg: 55, buffType: "Sell Boost", maxBuff: "0.2x" },
  
  // Rare
  "Ruby": { name: "Ruby", rarity: "Rare", minKg: 20, buffType: "Shake Strength", maxBuff: "0.13x" },
  "Meteoric Iron": { name: "Meteoric Iron", rarity: "Rare", minKg: 40, buffType: "Shake Strength", maxBuff: "0.13x" },
  "Peridot": { name: "Peridot", rarity: "Rare", minKg: 20, buffType: "Luck", maxBuff: "0.13x" },
  "Silver Clamshell": { name: "Silver Clamshell", rarity: "Rare", minKg: 21, buffType: "Shake Speed", maxBuff: "0.13x" },
  "Glacial Quartz": { name: "Glacial Quartz", rarity: "Rare", minKg: 40, buffType: "Dig Speed", maxBuff: "0.13x" },
  "Azuralite": { name: "Azuralite", rarity: "Rare", minKg: 30, buffType: "Dig Speed", maxBuff: "0.13x" },
  "Lapiz Lazuli": { name: "Lapiz Lazuli", rarity: "Rare", minKg: 32, buffType: "Dig Speed", maxBuff: "0.13x" },
  "Gloomberry": { name: "Gloomberry", rarity: "Rare", minKg: 40, buffType: "Dig Speed", maxBuff: "0.13x" },
  "Jade": { name: "Jade", rarity: "Rare", minKg: 40, buffType: "Modifier Boost", maxBuff: "0.13x" },
  "Onyx": { name: "Onyx", rarity: "Rare", minKg: 32, buffType: "Modifier Boost", maxBuff: "0.13x" },
  "Diopside": { name: "Diopside", rarity: "Rare", minKg: 21, buffType: "Modifier Boost", maxBuff: "0.13x" },
  "Amber": { name: "Amber", rarity: "Rare", minKg: 21, buffType: "Sell Boost", maxBuff: "0.13x" },
  "Pyrelith": { name: "Pyrelith", rarity: "Rare", minKg: 30, buffType: "Sell Boost", maxBuff: "0.13x" },
  "ANY Rare": { name: "ANY Rare", rarity: "Rare", minKg: 0, buffType: "Filler" },

  // Uncommon
  "Neodymium": { name: "Neodymium", rarity: "Uncommon", minKg: 40, buffType: "Shake Strength", maxBuff: "0.08x" },
  "Coral": { name: "Coral", rarity: "Uncommon", minKg: 10, buffType: "Capacity", maxBuff: "0.08x" },
  "Smoky Quartz": { name: "Smoky Quartz", rarity: "Uncommon", minKg: 22, buffType: "Shake Strength", maxBuff: "0.08x" },
  "Topaz": { name: "Topaz", rarity: "Uncommon", minKg: 22, buffType: "Capacity", maxBuff: "0.08x" },
  "Zircon": { name: "Zircon", rarity: "Uncommon", minKg: 15, buffType: "Size Boost", maxBuff: "0.05x" },
  "Rock Candy": { name: "Rock Candy", rarity: "Uncommon", minKg: 55, buffType: "Size Boost", maxBuff: "0.05x" },
  "Sapphire": { name: "Sapphire", rarity: "Uncommon", minKg: 21, buffType: "Dig Speed", maxBuff: "0.08x" },
  "Titanium": { name: "Titanium", rarity: "Uncommon", minKg: 40, buffType: "Dig Speed", maxBuff: "0.08x" },
  "Malachite": { name: "Malachite", rarity: "Uncommon", minKg: 18, buffType: "Modifier Boost", maxBuff: "0.08x" },
  "Glowberry": { name: "Glowberry", rarity: "Uncommon", minKg: 40, buffType: "Sell Boost", maxBuff: "0.08x" },
  "Electrum": { name: "Electrum", rarity: "Uncommon", minKg: 40, buffType: "Sell Boost", maxBuff: "0.08x" },
  "ANY Uncommon": { name: "ANY Uncommon", rarity: "Uncommon", minKg: 0, buffType: "Filler" },

  // Common
  "Pearl": { name: "Pearl", rarity: "Common", minKg: 19, buffType: "Shake Speed", maxBuff: "0.05x" },
  "Silver": { name: "Silver", rarity: "Common", minKg: 36, buffType: "Shake Speed", maxBuff: "0.05x" },
  "Seashell": { name: "Seashell", rarity: "Common", minKg: 19, buffType: "Capacity", maxBuff: "0.05x" },
  "Pyrite": { name: "Pyrite", rarity: "Common", minKg: 55, buffType: "Capacity", maxBuff: "0.05x" },
  "Obsidian": { name: "Obsidian", rarity: "Common", minKg: 30, buffType: "Size Boost", maxBuff: "0.04x" },
  "Copper": { name: "Copper", rarity: "Common", minKg: 60, buffType: "Size Boost", maxBuff: "0.04x" },
  "Blue Ice": { name: "Blue Ice", rarity: "Common", minKg: 39, buffType: "Dig Speed", maxBuff: "0.05x" },
  "Amethyst": { name: "Amethyst", rarity: "Common", minKg: 16, buffType: "Dig Speed", maxBuff: "0.05x" },
  "Platinum": { name: "Platinum", rarity: "Common", minKg: 32, buffType: "Dig Speed", maxBuff: "0.05x" },
  "Gold": { name: "Gold", rarity: "Common", minKg: 20, buffType: "Sell Boost", maxBuff: "0.05x" },
  "ANY Common": { name: "ANY Common", rarity: "Common", minKg: 0, buffType: "Filler" },
};

export const MODIFIERS: ModifierData[] = [
  { name: "Voidtorn", buffType: "Luck, Capacity", sellValueMult: "11x" },
  { name: "Treasured", buffType: "Luck", sellValueMult: "15x" },
  { name: "Iridescent", buffType: "Luck", sellValueMult: "3.5x" },
  { name: "Crystalline", buffType: "Size boost", sellValueMult: "3x" },
  { name: "Scorching", buffType: "Dig strength", sellValueMult: "2x" },
  { name: "Shiny", buffType: "Shake strength", sellValueMult: "1.2x" },
  { name: "Pure", buffType: "Dig speed", sellValueMult: "1.35x" },
  { name: "Glowing", buffType: "Shake speed", sellValueMult: "1.6x" },
  { name: "Electrified", buffType: "Dig speed, Shake speed", sellValueMult: "5x" },
  { name: "Irradiated", buffType: "Modifier boost", sellValueMult: "2.5x" },
];

export const BUILDS: Build[] = [
  {
    id: "traditional",
    name: "Traditional Luck/Capacity",
    category: "Balanced",
    description: "The standard endgame build for general prospecting. Balances high luck for drops with capacity for longer runs.",
    museumModifier: "Voidtorn OR Iridescent",
    equipment: [
      { slot: "Amulet", items: ["Frostthorn Pendant"] },
      { slot: "Head", items: ["Witch Hat", "Antlers of Life"] },
      { slot: "Rings", items: ["4x/5x Umbrite Ring", "1x/2x Vortex Ring", "1x Mythril Ring"] },
      { slot: "Tool (Infernal)", items: ["Blightflow Pan"] },
      { slot: "Tool (Rhythmic)", items: ["Pumpkin Shovel", "Abyssal Shovel"] },
    ],
    museumOres: [
      "Voidstone", "Flarebloom", "Inferlume", "Luminum", "Catseye", "Diamond",
      "Emerald", "Mercury", "Opal", "Ruby", "Meteoric Iron", "Peridot",
      "Neodymium", "Coral", "Smoky Quartz", "Pearl", "Silver", "Seashell"
    ]
  },
  {
    id: "geode-farming",
    name: "Geode Farming",
    category: "Farming",
    description: "Specialized for collecting geodes. Requires 'Pan Swapping' technique (switch pans when full).",
    museumModifier: "Voidtorn (If possible)",
    equipment: [
      { slot: "Amulet", items: ["Frostthorn Pendant", "Venomshank (Optional)"] },
      { slot: "Head", items: ["Candy Sack", "Fossilized Crown (Optional)"] },
      { slot: "Rings", items: ["3-4 Solar Rings (Until dig speed <= 20%)", "Ring of Harvest"] },
      { slot: "Tool (Cosmic)", items: ["Blightflow Pan", "Galactic Pan", "Pumpkin Pan"] },
      { slot: "Tool (Geothermal)", items: ["ANY Shovel"] },
    ],
    museumOres: [
      "Cryonic Artifact", "Vortessence", "Luminum", "Firefly Stone", "Catseye",
      "Ammonite Fossil", "Golden Pearl", "ANY Epic", "ANY Rare", "ANY Rare", "ANY Rare",
      "Coral", "Topaz", "ANY Uncommon", "Pyrite", "Seashell", "ANY Common"
    ],
    notes: "Optional items: Cryonic Artifact museum item. Venomshank equipment."
  },
  {
    id: "size-boost",
    name: "Size Boost",
    category: "Size",
    description: "Maximizes ore size for huge pulls. Great for specific events or massive ore hunting.",
    museumModifier: "Crystalline (Optional)",
    equipment: [
      { slot: "Amulet", items: ["Frostthorn Pendant"] },
      { slot: "Head", items: ["Pumpkin Lord", "Antlers of Life"] },
      { slot: "Rings", items: ["6x/8x Ring of Thorns", "4x/6x Ring of Thorns (No Lord)", "2x Prismatic Star (No Lord)"] },
      { slot: "Tool (Cosmic)", items: ["Blightflow/Galactic/Frostbite Pan"] },
      { slot: "Tool (Non-Euclidean)", items: ["Pumpkin/Abyssal Shovel"] },
    ],
    museumOres: [
      "Bloodstone", "Painite", "Star Garnet", "Dragon Bone", "Cinnabar", "Volcanic Key",
      "Osmium", "Bone", "Ashvein", "Ruby", "Meteoric Iron", "Peridot",
      "Zircon", "Rock Candy", "Topaz", "Obsidian", "Copper", "Seashell"
    ],
    notes: "Recommended Runes: Speed 1, Summit Seeker, Mountain Climber."
  },
  {
    id: "luck-size-hybrid",
    name: "Luck & Size Hybrid",
    category: "Hybrid",
    description: "A versatile mix of luck for rarity and size for quantity/mass.",
    museumModifier: "Voidtorn (If possible)",
    equipment: [
      { slot: "Amulet", items: ["Frostthorn Pendant"] },
      { slot: "Head", items: ["Antlers of Life"] },
      { slot: "Rings", items: ["3x/4x Umbrite Ring", "3x/4x Otherworldly Ring"] },
      { slot: "Tool (Cosmic)", items: ["Blightflow/Abyssal Pan"] },
      { slot: "Tool (Non-Euclidean)", items: ["Pumpkin/Abyssal Shovel"] },
    ],
    museumOres: [
      "Vineheart", "Painite", "Inferlume", "Fire Opal", "Dragon Bone", "Volcanic Key",
      "Ashvein", "Osmium", "Emerald", "Peridot", "Meteoric Iron", "Ruby",
      "Neodymium", "Smoky Quartz", "Zircon", "Pyrite", "Seashell", "Copper"
    ],
    notes: "Alternative to Otherworldly Ring: Prismatic Star."
  },
  {
    id: "autumn-hyperluck",
    name: "Autumn's Hyperluck",
    category: "Luck",
    description: "Maximum efficiency and luck combined. Specifically designed for high-tier hunting.",
    museumModifier: "All Voidtorn",
    equipment: [
      { slot: "Amulet", items: ["Venomshank"] },
      { slot: "Head", items: ["Witch Hat", "Antlers of Life"] },
      { slot: "Rings", items: ["5x Umbrite Ring", "2x Vortex Ring", "1x Purifying Ring"] },
      { slot: "Tool (Infernal)", items: ["Blightflow/Abyssal Pan"] },
      { slot: "Tool (Rhythmic)", items: ["Pumpkin/Abyssal Shovel"] },
    ],
    museumOres: [
      "Vineheart", "Inferlume", "Flarebloom", "Diamond", "Rose Gold", "Starshine",
      "Moonstone", "Mercury", "Emerald", "Meteoric Iron", "Peridot", "Ruby",
      "Sapphire", "Neodymium", "Smoky Quartz", "Pearl", "Silver", "Seashell"
    ],
    notes: "Use sandshaking tech for maximum efficiency. Recommended runes: Purity, Abyssal, Speed 1."
  },
  {
    id: "mastery-farming",
    name: "Mastery Farming",
    category: "High Volume",
    description: "Designed for high volume processing to level up mastery quickly.",
    museumModifier: "Electrified / Shiny (If possible)",
    equipment: [
      { slot: "Amulet", items: ["Frostthorn Pendant"] },
      { slot: "Head", items: ["Pumpkin Lord", "Cryogenic Preserver"] },
      { slot: "Rings", items: ["4x/6x Purifying Ring", "2x Mythril Ring", "4x/6x Vortex Ring"] },
      { slot: "Tool (Cosmic)", items: ["Blightflow Pan"] },
      { slot: "Tool (Non-Euclidean)", items: ["Pumpkin/Abyssal Shovel"] },
    ],
    museumOres: [
      "Voidstone", "Prismara", "Mythril", "Luminum", "Catseye", "Specterite",
      "Moonstone", "Opal", "Golden Pearl", "Meteoric Iron", "Silver Clamshell", "Ruby",
      "Coral", "Neodymium", "Smoky Quartz", "Pearl", "Silver", "Seashell"
    ],
    notes: "Voidstone in Museum is optional."
  }
];

export const MUTATION_RECIPES: Partial<Record<Rarity, MutationRecipe[]>> = {
  Common: [
    { item: "Amethyst Pendant", mineral: "Amethyst" },
    { item: "Garden Glove", mineral: "Titanium" },
    { item: "Gold Ring", mineral: "Gold" },
    { item: "Titanium Ring", mineral: "Titanium" },
  ],
  Uncommon: [
    { item: "Pearl Necklace", mineral: "Pearl" },
    { item: "Topaz Necklace", mineral: "Topaz" },
    { item: "Jade Armband", mineral: "Jade" },
    { item: "Smoke Ring", mineral: "Smoky Quartz" },
  ],
  Rare: [
    { item: "Lapis Armband", mineral: "Lapis Lazuli" },
    { item: "Speed Coil", mineral: "Meteoric Iron" },
    { item: "Meteor Ring", mineral: "Meteoric Iron" },
    { item: "Ruby Ring", mineral: "Ruby" },
  ],
  Epic: [
    { item: "Opal Amulet", mineral: "Opal" },
    { item: "Gravity Coil", mineral: "Osmium" },
    { item: "Heart of the Ocean", mineral: "Golden Pearl" },
    { item: "Moon Ring", mineral: "Iridium" },
  ],
  Legendary: [
    { item: "Mass Accumulator", mineral: "Uranium" },
    { item: "Spider Bowtie", mineral: "Catseye" },
    { item: "Crown", mineral: "Diamond" },
    { item: "Dragon Claw", mineral: "Dragon Bone" },
    { item: "Guiding Light", mineral: "Catseye" },
    { item: "Lightkeeper's Ring", mineral: "Luminum" },
    { item: "Ring of Harvest", mineral: "Lost Soul" },
  ],
  Mythic: [
    { item: "Phoenix Heart", mineral: "Inferlume" },
    { item: "Celestial Rings", mineral: "Vortessence" },
    { item: "Amulet of Life", mineral: "Prismara" },
    { item: "Amulet of Spirits", mineral: "Painite" },
    { item: "Royal Federation Crown", mineral: "Pink Diamond" },
    { item: "Phoenix Wings", mineral: "Flarebloom" },
    { item: "Cryogenic Preserver", mineral: "Mythril" },
    { item: "Candy Sack", mineral: "Vortessence" },
    { item: "Prismatic Star", mineral: "Pink Diamond" },
    { item: "Apocalypse Bringer", mineral: "Painite" },
    { item: "Mythril Ring", mineral: "Mythril" },
    { item: "Ring of Thorns", mineral: "Painite" },
    { item: "Purifying Ring", mineral: "Chrysoberyl" },
    { item: "Solar Ring", mineral: "Volcanic Core" },
  ],
  Exotic: [
    { item: "Frostthorn Pendant", mineral: "Cryonic Artifact" },
    { item: "Venomshank", mineral: "Bloodstone" },
    { item: "Fossilized Crown", mineral: "Dinosaur Skull" },
    { item: "Antlers of Life", mineral: "Vineheart" },
    { item: "Witch Hat", mineral: "Cryonic Artifact" },
    { item: "Pumpkin Lord", mineral: "Astral Spore" },
    { item: "Vortex Ring", mineral: "Voidstone" },
    { item: "Umbrite Ring", mineral: "Umbrite" },
    { item: "Otherworldly Ring", mineral: "Vineheart" },
  ]
};

export const MUTATION_STATS: MutationStat[] = [
  { type: "Prismatic", chance: "0.63%", multiplier: "1.6x" },
  { type: "Diamond", chance: "2.4%", multiplier: "1.35x" },
  { type: "Gold", chance: "6.3%", multiplier: "1.2x" },
  { type: "Silver", chance: "16%", multiplier: "1.1x" },
  { type: "None", chance: "75%", multiplier: "-" },
];
