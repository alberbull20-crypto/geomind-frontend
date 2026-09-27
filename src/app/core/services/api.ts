import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { AnalysisQuery } from '../models/query.model';
import { AnalysisResult } from '../models/analysis-result.model';
import { MOCK_ANALYSIS_RESULT } from './mock-data';

const USE_MOCK = true; // flip to false once FastAPI endpoint is live
const API_URL = 'http://localhost:8000/api/analyze'; // update when backend confirms

@Injectable({ providedIn: 'root' })
export class Api {
  constructor(private http: HttpClient) {}

  analyze(payload: AnalysisQuery): Observable<AnalysisResult> {
    if (USE_MOCK) {
      return of(MOCK_ANALYSIS_RESULT).pipe(delay(1800));
    }
    return this.http.post<AnalysisResult>(API_URL, payload);
  }
}