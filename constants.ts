import { Build, OreData } from './types';

export const ORE_DATABASE: Record<string, OreData> = {
  // Exotic
  "Voidstone": { name: "Voidstone", rarity: "Exotic", minKg: 20, buffType: "Luck, Capacity" },
  "Vineheart": { name: "Vineheart", rarity: "Exotic", minKg: 40, buffType: "Luck" },
  "Cryonic Artifact": { name: "Cryonic Artifact", rarity: "Exotic", minKg: 20, buffType: "Dig Strength/Shake" },
  "Bloodstone": { name: "Bloodstone", rarity: "Exotic", minKg: 40, buffType: "Size Boost" },
  "Pumpkin Soul": { name: "Pumpkin Soul", rarity: "Exotic", minKg: 40, buffType: "Size Boost" },
  "Dinosaur Skull": { name: "Dinosaur Skull", rarity: "Exotic", minKg: 100, buffType: "Size/Sell Boost" },
  
  // Mythic
  "Flarebloom": { name: "Flarebloom", rarity: "Mythic", minKg: 21, buffType: "Luck" },
  "Inferlume": { name: "Inferlume", rarity: "Mythic", minKg: 20, buffType: "Luck" },
  "Vortessence": { name: "Vortessence", rarity: "Mythic", minKg: 20, buffType: "Capacity" },
  "Painite": { name: "Painite", rarity: "Mythic", minKg: 20, buffType: "Size Boost" },
  "Star Garnet": { name: "Star Garnet", rarity: "Mythic", minKg: 20, buffType: "Size Boost" },
  "Prismara": { name: "Prismara", rarity: "Mythic", minKg: 20, buffType: "All Stats" },
  "Mythril": { name: "Mythril", rarity: "Mythic", minKg: 60, buffType: "Shake Strength" },

  // Legendary
  "Luminum": { name: "Luminum", rarity: "Legendary", minKg: 40, buffType: "Capacity" },
  "Catseye": { name: "Catseye", rarity: "Legendary", minKg: 20, buffType: "Capacity" },
  "Diamond": { name: "Diamond", rarity: "Legendary", minKg: 20, buffType: "Luck" },
  "Firefly Stone": { name: "Firefly Stone", rarity: "Legendary", minKg: 60, buffType: "Capacity" },
  "Dragon Bone": { name: "Dragon Bone", rarity: "Legendary", minKg: 50, buffType: "Size Boost" },
  "Cinnabar": { name: "Cinnabar", rarity: "Legendary", minKg: 20, buffType: "Size Boost" },
  "Volcanic Key": { name: "Volcanic Key", rarity: "Legendary", minKg: 20, buffType: "Size Boost" },
  "Fire Opal": { name: "Fire Opal", rarity: "Legendary", minKg: 20, buffType: "Size Boost" },
  "Rose Gold": { name: "Rose Gold", rarity: "Legendary", minKg: 40, buffType: "Shake Strength" },
  "Starshine": { name: "Starshine", rarity: "Legendary", minKg: 20, buffType: "Dig/Shake" },
  "Specterite": { name: "Specterite", rarity: "Legendary", minKg: 10, buffType: "Shake Speed" },

  // Epic
  "Emerald": { name: "Emerald", rarity: "Epic", minKg: 20, buffType: "Luck" },
  "Mercury": { name: "Mercury", rarity: "Epic", minKg: 76, buffType: "Shake Strength" },
  "Opal": { name: "Opal", rarity: "Epic", minKg: 20, buffType: "Shake Speed" },
  "Ammonite Fossil": { name: "Ammonite Fossil", rarity: "Epic", minKg: 49, buffType: "Capacity" },
  "Golden Pearl": { name: "Golden Pearl", rarity: "Epic", minKg: 19, buffType: "Capacity" },
  "Osmium": { name: "Osmium", rarity: "Epic", minKg: 80, buffType: "Size Boost" },
  "Bone": { name: "Bone", rarity: "Epic", minKg: 47, buffType: "Size Boost" },
  "Ashvein": { name: "Ashvein", rarity: "Epic", minKg: 20, buffType: "Size Boost" },
  "Moonstone": { name: "Moonstone", rarity: "Epic", minKg: 48, buffType: "Shake Speed" },
  
  // Rare
  "Ruby": { name: "Ruby", rarity: "Rare", minKg: 20, buffType: "Shake Strength" },
  "Meteoric Iron": { name: "Meteoric Iron", rarity: "Rare", minKg: 40, buffType: "Shake Strength" },
  "Peridot": { name: "Peridot", rarity: "Rare", minKg: 20, buffType: "Luck" },
  "Silver Clamshell": { name: "Silver Clamshell", rarity: "Rare", minKg: 21, buffType: "Shake Speed" },
  "ANY Rare": { name: "ANY Rare", rarity: "Rare", minKg: 0, buffType: "Filler" },

  // Uncommon
  "Neodymium": { name: "Neodymium", rarity: "Uncommon", minKg: 40, buffType: "Shake Strength" },
  "Coral": { name: "Coral", rarity: "Uncommon", minKg: 10, buffType: "Capacity" },
  "Smoky Quartz": { name: "Smoky Quartz", rarity: "Uncommon", minKg: 22, buffType: "Shake Strength" },
  "Topaz": { name: "Topaz", rarity: "Uncommon", minKg: 22, buffType: "Capacity" },
  "Zircon": { name: "Zircon", rarity: "Uncommon", minKg: 15, buffType: "Size Boost" },
  "Rock Candy": { name: "Rock Candy", rarity: "Uncommon", minKg: 55, buffType: "Size Boost" },
  "Sapphire": { name: "Sapphire", rarity: "Uncommon", minKg: 21, buffType: "Dig Speed" },
  "ANY Uncommon": { name: "ANY Uncommon", rarity: "Uncommon", minKg: 0, buffType: "Filler" },

  // Common
  "Pearl": { name: "Pearl", rarity: "Common", minKg: 19, buffType: "Shake Speed" },
  "Silver": { name: "Silver", rarity: "Common", minKg: 36, buffType: "Shake Speed" },
  "Seashell": { name: "Seashell", rarity: "Common", minKg: 19, buffType: "Capacity" },
  "Pyrite": { name: "Pyrite", rarity: "Common", minKg: 55, buffType: "Capacity" },
  "Obsidian": { name: "Obsidian", rarity: "Common", minKg: 30, buffType: "Size Boost" },
  "Copper": { name: "Copper", rarity: "Common", minKg: 60, buffType: "Size Boost" },
  "ANY Common": { name: "ANY Common", rarity: "Common", minKg: 0, buffType: "Filler" },
};

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
