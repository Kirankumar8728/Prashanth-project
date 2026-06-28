/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ChapterSection {
  id: string;
  title: string;
  page?: number;
  content: string[];
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  description?: string;
  sections: ChapterSection[];
}

export interface PreliminaryPage {
  id: string;
  title: string;
  content: string;
}

export interface ChartDataPoint {
  name: string;
  percentage?: number;
  value?: number;
  count?: number;
  [key: string]: string | number | undefined;
}

export interface TableInfo {
  tableNo: string;
  title: string;
  source: string;
  columns: string[];
  data: Record<string, string | number>[];
  interpretation: string;
}

export interface SurveyQuestion {
  id: number;
  section: string;
  text: string;
  type: "single" | "multiple" | "grid";
  options?: string[];
  gridRows?: string[];
  gridCols?: string[];
  surveyResult: Record<string, number>; // Maps option to historical percentage/count
}
