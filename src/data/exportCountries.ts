export type ExportCountry = {
  name: string;
  iso3: string;
  region: string;
};

export const exportCountries: ExportCountry[] = [
  { name: "United Kingdom", iso3: "GBR", region: "Europe" },
  { name: "Germany", iso3: "DEU", region: "Europe" },
  { name: "France", iso3: "FRA", region: "Europe" },
  { name: "Italy", iso3: "ITA", region: "Europe" },
  { name: "Spain", iso3: "ESP", region: "Europe" },
  { name: "Netherlands", iso3: "NLD", region: "Europe" },
  { name: "United States", iso3: "USA", region: "Americas" },
  { name: "Canada", iso3: "CAN", region: "Americas" },
  { name: "United Arab Emirates", iso3: "ARE", region: "Middle East" },
  { name: "Saudi Arabia", iso3: "SAU", region: "Middle East" },
  { name: "Japan", iso3: "JPN", region: "Asia Pacific" },
  { name: "Australia", iso3: "AUS", region: "Asia Pacific" },
  { name: "Singapore", iso3: "SGP", region: "Asia Pacific" },
  { name: "South Africa", iso3: "ZAF", region: "Africa" },
];

export const exportStats = [
  { value: "14+", label: "Countries" },
  { value: "25+", label: "Years Experience" },
  { value: "B2B", label: "Focused" },
  { value: "Global", label: "Standards" },
];
