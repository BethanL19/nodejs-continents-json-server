interface Continent {
  name: string;
  area: {
    /** Number between 0-100 */
    pctOfTotal: number;
    sqKm: number;
    sqMiles: number;
  };
  highestPoint: string;
  population: {
    people: {
      count: number;
      unit?: "million" | "billion";
    };
    /** Number between 0-100 */
    pctOfTotal: number;
  };
}

export const ASIA: Continent = {
  name: "Asia",
  area: {
    sqKm: 44_614_000,
    sqMiles: 17_226_000,
    pctOfTotal: 29.8,
  },
  highestPoint: "Mount Everest",
  population: {
    people: { count: 4.6, unit: "billion" },
    pctOfTotal: 60,
  },
};

export const OCEANIA: Continent = {
  name: "Oceania",
  area: {
    sqKm: 8_510_900,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Puncak Jaya",
  population: {
    people: { count: 42, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const Africa: Continent = {
  name: "Africa",
  area: {
    sqKm: 30_370_000,
    sqMiles: 11_730_000,
    pctOfTotal: 20.4,
  },
  highestPoint: "Kilimanjaro",
  population: {
    people: { count: 1.34, unit: "billion" },
    pctOfTotal: 16.72,
  },
};
export const NorthAmerica: Continent = {
  name: "North America",
  area: {
    sqKm: 24_709_000,
    sqMiles: 9_540_000,
    pctOfTotal: 16.5,
  },
  highestPoint: "Denali (Mount McKinley)",
  population: {
    people: { count: 579, unit: "million" },
    pctOfTotal: 7.79,
  },
};
export const SouthAmerica: Continent = {
  name: "South America",
  area: {
    sqKm: 17_840_000,
    sqMiles: 6_890_000,
    pctOfTotal: 12,
  },
  highestPoint: "Aconcagua",
  population: {
    people: { count: 423, unit: "million" },
    pctOfTotal: 5.63,
  },
};
export const Antarctica: Continent = {
  name: "Antarctica",
  area: {
    sqKm: 14_000_000,
    sqMiles: 5_400_000,
    pctOfTotal: 9.2,
  },
  highestPoint: "Vinson Massif",
  population: {
    people: { count: 1_000, unit: undefined },
    pctOfTotal: 0,
  },
};
export const Europe: Continent = {
  name: "Europe",
  area: {
    sqKm: 10_180_000,
    sqMiles: 3_930_000,
    pctOfTotal: 6.8,
  },
  highestPoint: "Mount Elbrus",
  population: {
    people: { count: 747, unit: "million" },
    pctOfTotal: 10.11,
  },
};
