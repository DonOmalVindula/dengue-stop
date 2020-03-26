import React from "react";

class Heatmap extends React.Component {
  render() {
    const dataStudioIframe =
      '<iframe width="100%" height="100%" src="https://datastudio.google.com/embed/reporting/e93b829b-1cca-4549-8fde-5d3fc6536317/page/MysJB" frameborder="0" style="border:0" allowfullscreen></iframe>';
    return (
      <React.Fragment>
        <div style={{height: "95%", overflow: "hidden"}} dangerouslySetInnerHTML={{ __html: dataStudioIframe }}></div>
      </React.Fragment>
    );
  }
}
export default Heatmap;
