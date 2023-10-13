import { useState } from "react";

const GenericModal=()=>{
    const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Launch demo modal
      </button>

      <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>              
              </button>
            </div>
            <div className="modal-body">
              {/* Your form or other content goes here */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default GenericModal