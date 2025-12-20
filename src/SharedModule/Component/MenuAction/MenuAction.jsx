import React from 'react'

export default function MenuAction() {
  return (
    <>
          <div className="dropdown">
      <span
        data-bs-toggle="dropdown"
        style={{ cursor: "pointer", fontSize: "20px" }}
      >
       <i class="fa-solid fa-ellipsis"></i>
      </span>

      <ul className="dropdown-menu">
        <li className="dropdown-item">View</li>
        <li className="dropdown-item">Edit</li>
        <li className="dropdown-item text-danger">Delete</li>
      </ul>
    </div>
    </>
  )
}
