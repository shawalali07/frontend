import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import "./AllQuestions.css";

const AllQuestions = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container ">
        <div className="card " style={{ width: "55rem", height: "7.5rem" }}>
          <h2 className="all-questions mt-1">All Questions</h2>
          <span>
            <button
              onClick={() => navigate("/askquestion")}
              type="button"
              className="btn btn-primary ask-question"
            >
              Ask Question
            </button>
          </span>
          <span className="all-questions-number">22,770,849 questions</span>
          {/* <div className="card-body all-questions-number">
            22,770,849 questions
          </div> */}
          <div className="btn-filter-questions">
            <ButtonGroup
              variant="outlined"
              aria-label="outlined primary button group"
            >
              <Button>Newest</Button>
              <Button>Active</Button>
              <Button>Bountied</Button>
              <Button>Unanswered</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllQuestions;
