import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';
import { getInterviewFlow, getPositionCandidates, updateCandidateStage } from '../../services/api';
import { Stage, Candidate } from '../../types/position';
import { ArrowLeft } from '@phosphor-icons/react';
import styles from './PositionKanban.module.css';

const PositionKanban: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const [stages, setStages] = useState<Stage[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [flowData, candidatesData] = await Promise.all([
          getInterviewFlow(id!),
          getPositionCandidates(id!)
        ]);
        setStages(flowData);
        setCandidates(candidatesData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleDragEnd = async (result: any) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;
    const newStageId = destination.droppableId;

    try {
      await updateCandidateStage(draggableId, newStageId);
      
      setCandidates(prevCandidates => 
        prevCandidates.map(candidate => 
          candidate.id === draggableId 
            ? { ...candidate, currentStage: newStageId }
            : candidate
        )
      );
    } catch (error) {
      console.error('Error updating candidate stage:', error);
    }
  };

  if (loading) return <div>{t('loading')}</div>;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button 
          className={styles.backButton}
          onClick={() => navigate('/positions')}
        >
          <ArrowLeft size={24} />
        </button>
        <h1>{t('position.title')}</h1>
      </header>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.kanbanBoard}>
          {stages.map(stage => (
            <div key={stage.id} className={styles.column}>
              <h3 className={styles.columnHeader}>{t(`stages.${stage.name}`)}</h3>
              <Droppable droppableId={stage.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={styles.columnContent}
                  >
                    {candidates
                      .filter(candidate => candidate.currentStage === stage.id)
                      .map((candidate, index) => (
                        <Draggable
                          key={candidate.id}
                          draggableId={candidate.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={styles.card}
                            >
                              <h4>{candidate.fullName}</h4>
                              <p>{t('candidate.score', { score: candidate.averageScore })}</p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default PositionKanban; 