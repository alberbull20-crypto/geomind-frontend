import type { FeatureCollection } from 'geojson';

export interface AnalysisStatistics {
  total_features: number;
  high_need_areas: number;
  [key: string]: number;
}

export interface AnalysisResult {
  query: string;
  summary: string;
  insight: string;
  geojson: FeatureCollection;
  statistics: AnalysisStatistics;
}