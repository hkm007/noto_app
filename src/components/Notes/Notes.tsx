import React from "react";
import "./Notes.css";

function Notes() {
  return (
    <div className="notes col-lg-4 p-1">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <h4>Notes Title</h4>
          </div>

          <p className="notes-p">
            By{" "}
            <strong>
              <i>admin</i>
            </strong>{" "}
            <span className="badge rounded-pill bg-success">Notes</span>
          </p>
          <a
            className="download"
            href="path_to_file"
            download="proposed_file_name"
          >
            Downloaded <b>5</b> times
          </a>
        </div>
      </div>
    </div>
  );
}

export default Notes;
