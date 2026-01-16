import Header from "../components/layout/Header";
import SkillHealthCard from "../components/dashboard/SkillHealthCard";
impoimport LearningPathTimeline from "../components/dashboard/LearningPathTimeline";
import AssessmentSummary from "../components/dashboard/AssessmentSummary";rt ProjectProgressCard from "../components/dashboard/ProjectProgressCard";

import ConfidenceMeter from "../components/dashboard/ConfidenceMeter";
import NextActions from "../components/dashboard/NextActions";

export default function StudentDashboard() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-6">
          <SkillHealthCard />
          <ProjectProgressCard />
          <AssessmentSummary />
        </div>
        <div className="col-md-6">
          <LearningPathTimeline />
          <ConfidenceMeter />
          <NextActions />
        </div>
      </div>
    </>
  );
}
