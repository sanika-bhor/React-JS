import Header from "../components/layout/Header";
import LearningPathTimeline from "../components/dashboard/LearningPathTimeline";
import AssessmentSummary from "../components/dashboard/AssessmentSummary";

function Projects() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-6">
          <LearningPathTimeline/>
        </div>
        <div className="col-md-6">
         <AssessmentSummary/>
        </div>
      </div>
    </>
  );
}

export default Projects;
