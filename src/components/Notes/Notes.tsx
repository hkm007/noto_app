import React from "react";
import "./Notes.css";
import { FaFileDownload } from 'react-icons/fa';
import { INotes } from "../../models/Notes";


function Notes(props: INotes) {
  return (
    <div className="notes col-lg-6 p-1">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h4>{props.title}</h4>
          </div>

          <div className="row">
            <p className="notes-p col-lg-10 mt-2">
              By{" "}
              <strong>
                <i>{props.owner}</i>
              </strong>{" "}
              <span className="badge rounded-pill bg-success">{props.type}</span>
              {" "}
              {
                props.fresher === true ? <span className="badge rounded-pill bg-warning">1st Year</span> : null
              }
            </p>
            <a
            className="col-lg-2"
              href={props.link}
              download
            >
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
