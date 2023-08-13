import analytics from "../../asests/img/analytics.png";

const EmptyPage = () => (
  <div className="empty-page">
    <img src={analytics} className="empty-image" alt="no results"></img>
    <h3>No Matching Results</h3>
  </div>
);

export default EmptyPage;
