import { useState } from "react";

function AddBoxModal(props) {
  function fetchPath(command) {
    if (process.env.NODE_ENV === "production") {
      return "https://hotbox14.herokuapp.com/" + command;
    } else {
      return "http://localhost:5000/" + command;
    }
  }

  const [addedBox, setAddedBox] = useState(false);

  function addBox(event) {
    event.preventDefault();

    try {
      fetch(fetchPath("addbox"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      setAddedBox(true);
    } catch (err) {
      alert(err.toString());
      return;
    }
  }

  return (
    <div className="confirmModal">
      {!addedBox ? (
        <p>Add a new box to the system?</p>
      ) : (
        <p>Box has been added</p>
      )}
      {!addedBox && (
        <button className="btn btnSpace" onClick={addBox}>
          Yes
        </button>
      )}
      <button className="btn btn--alt btnSpace" onClick={props.onCancel}>
        {!addedBox ? "No" : "Close"}
      </button>
    </div>
  );
}

export default AddBoxModal;
