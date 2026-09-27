import { AnalysisResult } from '../models/analysis-result.model';

export const MOCK_ANALYSIS_RESULT: AnalysisResult = {
  query: 'Which areas have limited access to healthcare?',
  summary: 'Several areas show lower accessibility to healthcare facilities compared to the rest of the demo region.',
  insight: 'The highest-need zones are concentrated in the northeastern part of the demo area, where the nearest facility is over 5km away.',
  geojson: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [36.82, -1.29] },
        properties: { name: 'Low Access Zone A', category: 'high-need' }
      },
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [36.85, -1.27] },
        properties: { name: 'Low Access Zone B', category: 'high-need' }
      }
    ]
  },
  statistics: {
    total_features: 2,
    high_need_areas: 2
  }
};

export interface HistoryEntry {
  id: string;
  query: string;
  timestamp: string;
  highNeedAreas: number;
  totalFeatures: number;
}

export const MOCK_HISTORY: HistoryEntry[] = [
  {
    id: 'h1',
    query: 'Which areas have limited access to healthcare?',
    timestamp: 'Today, 2:45 PM',
    highNeedAreas: 8,
    totalFeatures: 24
  },
  {
    id: 'h2',
    query: 'Show areas with high population density near roads',
    timestamp: 'Today, 1:20 PM',
    highNeedAreas: 5,
    totalFeatures: 31
  },
  {
    id: 'h3',
    query: 'Identify underserved education facilities',
    timestamp: 'Yesterday, 4:10 PM',
    highNeedAreas: 3,
    totalFeatures: 12
  }
];

export interface Dataset {
  id: string;
  name: string;
  source: string;
  format: string;
  coverage: string;
  recordCount: string;
}

export const MOCK_DATASETS: Dataset[] = [
  {
    id: 'd1',
    name: 'Healthcare Facilities',
    source: 'OpenStreetMap / Overpass',
    format: 'GeoJSON',
    coverage: 'Nairobi Metro Area',
    recordCount: '412 records'
  },
  {
    id: 'd2',
    name: 'Population Density',
    source: 'Kenya Open Data',
    format: 'Raster / Shapefile',
    coverage: 'Nairobi County',
    recordCount: '1,204 grid cells'
  },
  {
    id: 'd3',
    name: 'Administrative Boundaries',
    source: 'Humanitarian Data Exchange (HDX)',
    format: 'Shapefile',
    coverage: 'Kenya (Ward level)',
    recordCount: '2,889 boundaries'
  },
  {
    id: 'd4',
    name: 'Road Network',
    source: 'OpenStreetMap',
    format: 'GeoJSON',
    coverage: 'Nairobi Metro Area',
    recordCount: '18,650 segments'
  }
];

export interface InsightSummary {
  id: string;
  title: string;
  summary: string;
  date: string;
}

export const MOCK_INSIGHTS: InsightSummary[] = [
  {
    id: 'i1',
    title: 'Healthcare Accessibility Analysis',
    summary: '8 areas show significantly lower healthcare accessibility compared to the city average.',
    date: 'Today, 2:45 PM'
  },
  {
    id: 'i2',
    title: 'Population Density vs Road Access',
    summary: 'High-density zones near Kiambu show limited road connectivity relative to population.',
    date: 'Today, 1:20 PM'
  },
  {
    id: 'i3',
    title: 'Education Facility Gaps',
    summary: '3 wards have no education facility within a 2km radius of the population centroid.',
    date: 'Yesterday, 4:10 PM'
  }
];