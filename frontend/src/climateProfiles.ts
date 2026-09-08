import type { SeasonOption } from './types';

export interface ClimateProfile {
  season: SeasonOption;
  summary: string;
  outfitDirection: string;
  preferredFabrics: string[];
  recommendedColors: string[];
  stylingFocus: string;
}

export const CLIMATE_PROFILES: Record<SeasonOption, ClimateProfile> = {
  Summer: {
    season: 'Summer',
    summary: 'Hot weather focus with breathable and light silhouettes.',
    outfitDirection: 'Lighter clothes with airy cuts',
    preferredFabrics: ['Organic Linen', 'Cotton Silk', 'Chiffon', 'Georgette'],
    recommendedColors: ['Mint Green', 'Soft Ivory', 'Powder Blue', 'Peach Pastel'],
    stylingFocus: 'Choose lightweight drapes, half sleeves, and open footwear for comfort.'
  },
  Winter: {
    season: 'Winter',
    summary: 'Cold weather focus with layered and rich textures.',
    outfitDirection: 'Warm layered styling',
    preferredFabrics: ['Micro-Velvet', 'Tuxedo Wool', 'Banarasi Silk', 'Pashmina'],
    recommendedColors: ['Deep Emerald', 'Royal Navy', 'Wine Burgundy', 'Rich Plum'],
    stylingFocus: 'Use jewel-tone palettes with shawls, full sleeves, and closed footwear.'
  },
  Monsoon: {
    season: 'Monsoon',
    summary: 'Rain-ready focus with practical cuts and quick-dry fabrics.',
    outfitDirection: 'Quick-dry practical silhouettes',
    preferredFabrics: ['Quick-dry Rayon', 'Lightweight Crepe', 'Georgette', 'Cotton Blend'],
    recommendedColors: ['Teal', 'Mustard', 'Coral', 'Dark Indigo'],
    stylingFocus: 'Prefer ankle-length hems, anti-slip footwear, and moisture-friendly fabrics.'
  },
  Mild: {
    season: 'Mild',
    summary: 'Balanced weather focus with flexible all-day outfits.',
    outfitDirection: 'Balanced multi-season looks',
    preferredFabrics: ['Raw Silk', 'Cotton-Silk Blend', 'Tussar Silk', 'Chanderi'],
    recommendedColors: ['Jewel Tones', 'Champagne Gold', 'Muted Rose', 'Slate Gray'],
    stylingFocus: 'Use mid-weight layering and versatile color combinations for day-to-night wear.'
  }
};

