import Header from "../components/layout/Header";
import ConfidenceMeter from "../components/dashboard/ConfidenceMeter";
import NextActions from "../components/dashboard/NextActions";

function Assessments() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-6">
          <ConfidenceMeter/>
        </div>
        <div className="col-md-6">
         <NextActions/>
        </div>
      </div>
    </>
  );
}

export default Assessments;
