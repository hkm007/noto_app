import React from "react";
import "./Notes.css";
import { FaFileDownload } from 'react-icons/fa';

function Notes() {
  return (
    <div className="notes col-lg-6 p-1">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h4>Notes Title</h4>
          </div>

          <div className="row">
            <p className="notes-p col-lg-10 mt-2">
              By{" "}
              <strong>
                <i>admin</i>
              </strong>{" "}
              <span className="badge rounded-pill bg-success">Notes</span>
            </p>
            <a
            className="col-lg-2"
              href="path_to_file"
              download="proposed_file_name"
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
