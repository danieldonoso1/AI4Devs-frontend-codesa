import axios from 'axios';
import { Position, Candidate, Stage } from '../types/position';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

export const getInterviewFlow = async (positionId: string): Promise<Stage[]> => {
  const response = await api.get(`/positions/${positionId}/interviewFlow`);
  return response.data;
};

export const getPositionCandidates = async (positionId: string): Promise<Candidate[]> => {
  const response = await api.get(`/positions/${positionId}/candidates`);
  return response.data;
};

export const updateCandidateStage = async (candidateId: string, stageId: string): Promise<void> => {
  await api.put(`/candidates/${candidateId}/stage`, { stageId });
}; 