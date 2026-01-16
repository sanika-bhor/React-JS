import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import StudentDashboard from './pages/StudentDashboard';
import Projects from './pages/Projects';
import Assessments from './pages/Assessments';
import MentorFeedback from './pages/MentorFeedback';
import CareerReadiness from './Pages/CareerReadiness';
import SkillHealth from './Pages/SkillHealth';
import LearningPath from './Pages/LearningPath';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/mentor-feedback" element={<MentorFeedback />} />
            <Route path='/skill-health' element={<SkillHealth/>}/>
            <Route path="/learningpath" element={<LearningPath/>}/>
            <Route path="/mentorfeedback" element={<MentorFeedback/>}/>
            <Route path='/careerreadiness' element={<CareerReadiness/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;