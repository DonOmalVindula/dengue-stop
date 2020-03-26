import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";
import Heatmap from "./heatMap/Heatmap";
import Summary from "./summary/Summary";
import Incidents from "./incidents/Incidents";

class Home extends React.Component {
  render() {
    return (
      <MDBContainer fluid>
        <MDBRow className="mt-4">
          <MDBCol size="5" className="pl-3">
            <MDBCard style={{ width: "100%", marginBottom: "20px", height: "85vh" }}>
              <MDBCardBody>
                <MDBCardTitle>Dengue Heat Map</MDBCardTitle>
                <Heatmap></Heatmap>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="4" className="px-3">
            <MDBCard style={{ width: "100%", marginBottom: "20px", height: "85vh" }}>
              <MDBCardBody>
                <MDBCardTitle>Summary</MDBCardTitle>
                <Summary></Summary>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size="3" className="pr-3">
            <MDBCard style={{ width: "100%", marginBottom: "20px", height: "85vh" }}>
              <MDBCardBody>
                <MDBCardTitle>Reported Incidents</MDBCardTitle>
                <Incidents></Incidents>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Home;
