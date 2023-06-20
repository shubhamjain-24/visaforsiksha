// import React from "react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Toast } from "react-bootstrap";
import mf from "./approvalImages/mf.png";
import mtaf from "./approvalImages/mtaf.png";
import at from "./approvalImages/at.png";
import rw from "./approvalImages/rw.png";
import InternNavigation from "./pages/InternNavigation";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./ApprovalStyles.css";
import Infopage1 from "../src/InfoPages/Infopage1";
import Infopage2 from "../src/InfoPages/Infopage2";
import Infopage3 from "../src/InfoPages/infopage3";
import Infopage4 from "../src/InfoPages/infopage4";
import Infopage5 from "../src/InfoPages/infopage5";
import img1 from "./Images/if22.png";
import img2 from "./Images/if3.png";
import "../src/InfoPages/Infopage2.css";
import "../src/InfoPages/infopage3.css";

const ApprovalStatus = () => {
  const [emails, setEmail] = useState("");
  const [internItem, setInternItem] = useState("");
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);
  const [item, setItem] = useState(null);
  const toast = useToast();
  const [review, setReview] = useState(false);
  const [approve, setApprove] = useState(false);

  //   setEmail(userInfo.email);
  const FetchInternClientarray = async () => {
    setEmail(userInfo.email);
    try {
      const res = await axios.get(`/api/user/singleIntern/${emails}`);
      setInternItem(res.data);
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };
  const m = async () => {
    setEmail(userInfo.email);
    try {
      const res = await axios.get(`/api/user/singleIntern/${emails}`);
      setInternItem(res.data);
      if (internItem.checkerSent == true) {
        setReview(true);
        return;
      } else if (internItem.approval == true) {
        setApprove(true);
      }
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  //   /markedfalse/approvalfalse/:email
  const MarkasCompleted = async () => {
    try {
      const res = await axios.put(
        `/api/user/markedfalse/approvalfalse/${emails}`
      );
      //   setInternItem(res.data);
      console.log("res", res);
      toast({
        title: "Marked As Completed",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      console.log(error);
      // toast({
      //   title: "Could'nt Mark,check your network",
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      // });
    }
  };

  useEffect(() => {
    // fetchItem();
    FetchInternClientarray();

    m();
    // DeleteClientarrayItem();
  }, [item]);

  return (
    <>
      <InternNavigation />
      {/* <div>
        {internItem.Marked ? (
          <>
            submit your taks
            <img src={rw} alt="" />
          </>
        ) : (
          <>
            <Button onClick={MarkasCompleted}>Mark </Button>
       
          </>
        )}
      </div> */}
      <div className="ApprovStatus_head">
        {internItem.checkerSent == true ? (
          <>
            {/* Your task is underview. */}
            {/* <img src={mf}></img> */}
            <Infopage1 />
          </>
        ) : (
          <> </>
        )}
      </div>
      <div className="ApprovStatus_head_sub">
        Click here to know the status:
        {/* <Button
          className="Approvstatus_button"
          onClick={FetchInternClientarray}
        >
          Fetch
        </Button> */}
        <Button
          className="Approvstatus_button"
          onClick={FetchInternClientarray}
        >
          Fetch
        </Button>
      </div>

      {/* {internItem.Marked == false ? (
        <>Submit your task</>
      ) : (
        <>Your Task has been view</>
      )} */}

      {/* {review ? <>Your work is under view</> : <>Submit a new task</>} */}

      {/* {internItem.Marked == true ? <>Your Work is under View</> : <></>} */}

      <div className="aproovStatusPic1">
        {internItem.approval == "null" && internItem.checkerSent == false ? (
          <>
            {/* Submit a new task */}
            {/* <img src={rw}></img> */}
            <Infopage4 />
          </>
        ) : (
          <> </>
        )}
      </div>

      {internItem.approval == "true" ? (
        <>
          {/* Your task is approved <Button onClick={MarkasCompleted}>Mark </Button> */}
          <div className="if3_clientButton_Div">
            Now you can explore more Clients &nbsp;&nbsp;&nbsp;
            <Link to="/clientdetails">
              <button
                style={{
                  height: "3rem",
                  width: "10rem",
                  // display:"flex",
                  // marginTop: "9rem",
                  // position: "absolute",
                  backgroundColor: "#2d3867",
                  padding: "0.5rem 1rem",
                  color: "white",
                  // marginLeft: "20rem",
                  borderRadius: "30px",
                  fontSize: "15px",
                  zIndex: 100,
                }}
              >
                Explore Clients
              </button>
            </Link>
          </div>
          {/* <img src={at}></img> */}
          {/* <Infopage3/> */}
          <div className="if3_mainContainer">
            <div className="if3_subContainer">
              <div className="if3_gridContainer">
                <div className="if3_gridsec1">
                  <img className="if3-img" src={img2} alt="" />
                </div>
                <div className="if3_gridsec2">
                  <div className="if3_textSection">
                    <div className="if3_text1">Congrats,</div>
                    <div className="if3_text2">
                      Your task
                      <br />
                      has been
                    </div>
                    <div className="if3_text3">approved.</div>
                    <div className="if_button" onClick={MarkasCompleted}>
                      Mark as
                      <br />
                      Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {internItem.approval == "false" && internItem.checkerSent == true ? (
        <>
          {/* Your task was not approved
          {internItem.Corrections} */}
          {/* <img src={mtaf}></img> */}
          {/* <Infopage2/> */}
          <div className="if2_mainContainer">
            <div className="if2_subContainer">
              <div className="if2_gridContainer">
                <div className="if2_gridsec1">
                  <div className="if2_textSection">
                    <div className="if2_text1">
                      <span className="if2_sp1">oops ! </span>
                      Your work has <span className="if2_sp2">not </span>been
                      accepted.
                    </div>
                  </div>
                  <div className="if2_reviewSection">
                    <div className="if2_text2">Description</div>
                    <div className="if2_text3">{internItem.Corrections}</div>
                  </div>
                </div>
                <div className="if2_gridsec2">
                  <img className="if3-img" src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {internItem.approval == "false" ? (
        <>
          {/* Your task is not approved
          {internItem.Corrections} */}
          {/* <img src={mtaf}></img> */}
          {/* <Infopage2/> */}
          <div className="if2_mainContainer">
            <div className="if2_subContainer">
              <div className="if2_gridContainer">
                <div className="if2_gridsec1">
                  <div className="if2_textSection">
                    <div className="if2_text1">
                      <span className="if2_sp1">oops ! </span>
                      Your work has <span className="if2_sp2">not </span>been
                      accepted.
                    </div>
                  </div>
                  <div className="if2_reviewSection">
                    <div className="if2_text2">Description</div>
                    <div className="if2_text3">{internItem.Corrections}</div>
                  </div>
                </div>
                <div className="if2_gridsec2">
                  <img className="if3-img" src={img1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );

  // if (internItem.Marked === false && internItem.approval === false) {
  //   return <div>The Content is viewed by the Checker but not approved</div>;
  // } else if (internItem.approval === false) {
  //   return <div>submit the task</div>;
  // }
  //   } else {
  //     return (
  //       <div>
  //         The Content is approved
  //         <Button onClick={MarkasCompleted}>Mark</Button>
  //       </div>
  //     );
  //   }
};

export default ApprovalStatus;
