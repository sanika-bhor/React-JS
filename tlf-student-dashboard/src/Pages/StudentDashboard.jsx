import React from 'react';
import Header from '../components/layout/Header';
import SkillHealthCard from '../components/dashboard/SkillHealthCard';
import ProjectProgressCard from '../components/dashboard/ProjectProgressCard';
import LearningPathTimeline from '../components/dashboard/LearningPathTimeline';
import AssessmentSummary from '../components/dashboard/AssessmentSummary';
import ConfidenceMeter from '../components/dashboard/ConfidenceMeter';
import NextActions from '../components/dashboard/NextActions';

function StudentDashboard() {
  

  return (
    <div>
      <Header/>
      <SkillHealthCard />
      <ProjectProgressCard />
      <LearningPathTimeline />
      <AssessmentSummary />
      <ConfidenceMeter />
      <NextActions />
    </div>
  );
}

export default StudentDashboard;