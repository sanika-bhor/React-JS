const BASEURL = "http://localhost:9191/AssessmentServlet";
const SubjectService = async () => {
  try {

    const res=await fetch(`${BASEURL}/api/subjects`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default SubjectService;
