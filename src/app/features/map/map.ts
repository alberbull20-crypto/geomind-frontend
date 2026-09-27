import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as maplibregl from 'maplibre-gl';
import type { FeatureCollection } from 'geojson';

const NAIROBI_CENTER: [number, number] = [36.8219, -1.2921];

const DARK_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    'osm-tiles': {
      type: 'raster',
      tiles: [
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      ],
      tileSize: 256,
      attribution: '© OpenStreetMap contributors'
    }
  },
  layers: [
    {
      id: 'osm-tiles-layer',
      type: 'raster',
      source: 'osm-tiles'
    }
  ]
};

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef<HTMLDivElement>;
  @Input() geojson: FeatureCollection | null = null;

  private map: maplibregl.Map | null = null;
  private readonly sourceId = 'analysis-results';

  ngAfterViewInit(): void {
    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: DARK_STYLE,
      center: NAIROBI_CENTER,
      zoom: 11,
      attributionControl: false
    });

    this.map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');
    this.map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    this.map.on('load', () => {
      this.map!.addSource(this.sourceId, {
        type: 'geojson',
        data: this.geojson ?? { type: 'FeatureCollection', features: [] }
      });

      this.map!.addLayer({
        id: 'result-points',
        type: 'circle',
        source: this.sourceId,
        paint: {
          'circle-radius': 7,
          'circle-color': '#bf5b34',
          'circle-stroke-width': 1.5,
          'circle-stroke-color': '#0b0f14'
        }
      });

      if (this.geojson) {
        this.fitToResults(this.geojson);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['geojson'] && this.map && this.map.getSource(this.sourceId)) {
      const data = this.geojson ?? { type: 'FeatureCollection' as const, features: [] };
      (this.map.getSource(this.sourceId) as maplibregl.GeoJSONSource).setData(data);
      this.fitToResults(data);
    }
  }

  private fitToResults(data: FeatureCollection): void {
    if (!this.map || data.features.length === 0) return;

    const bounds = new maplibregl.LngLatBounds();
    let hasPoints = false;

    for (const feature of data.features) {
      if (feature.geometry.type === 'Point') {
        bounds.extend(feature.geometry.coordinates as [number, number]);
        hasPoints = true;
      }
    }

    if (hasPoints) {
      this.map.fitBounds(bounds, { padding: 60, maxZoom: 13, duration: 600 });
    }
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}