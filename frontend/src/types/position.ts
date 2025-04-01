export interface Position {
  id: string;
  title: string;
}

export interface Candidate {
  id: string;
  fullName: string;
  averageScore: number;
  currentStage: string;
}

export interface Stage {
  id: string;
  name: string;
  order: number;
} 