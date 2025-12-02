export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Exotic';

export interface OreData {
  name: string;
  rarity: Rarity;
  minKg: number;
  buffType: string;
}

export interface BuildEquipment {
  slot: string;
  items: string[];
}

export interface Build {
  id: string;
  name: string;
  category: string;
  description: string;
  museumModifier: string;
  equipment: BuildEquipment[];
  museumOres: string[]; // List of Ore Names
  notes?: string;
}
