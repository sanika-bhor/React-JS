import React from 'react';

function LearningPathTimeline() {
  const modules = [
    { name: 'C# Basics', status: '✔' },
    { name: 'OOP Concepts', status: '✔' },
    { name: 'Web API', status: '⏳' },
    { name: 'Cloud & DevOps', status: '🔒' },
  ];

  return (
    
    <div className="card mb-3">
      <div className="card-header">Learning Path</div>
      <div className="card-body">
        {modules.map((module, idx) => (
          <div key={idx}>{module.status} {module.name}</div>
        ))}
      </div>
    </div>
  );
}

export default LearningPathTimeline;