import { useRef } from "react";

function AddBoxForm() {
  const boxidRef = useRef();
  const statusRef = useRef();
  const infoRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const boxid = boxidRef.current.value;
    const status = statusRef.current.value;
    const info = infoRef.current.value;

    const boxData = {
      id: boxid,
      status: status,
      info: info,
    };

    console.log(boxData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="boxid">Box ID</label>
          <input type="text" required id="boxid" ref={boxidRef} />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input type="text" required id="status" ref={statusRef} />
        </div>
        <div>
          <label htmlFor="info">Info</label>
          <input type="text" required id="info" ref={infoRef} />
        </div>
        <div>
          <button>Add Box</button>
        </div>
      </form>
    </div>
  );
}

export default AddBoxForm;
