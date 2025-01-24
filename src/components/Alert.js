import React from 'react';

export default function Alert(props) {
  return (
    <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
      {props.message}
      <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

