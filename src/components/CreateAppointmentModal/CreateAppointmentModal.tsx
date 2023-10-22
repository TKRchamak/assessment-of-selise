import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const CreateAppointmentModal = () => {
  const [value, onChange] = useState("10:00");

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="text"
              name="gender"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="text"
              name="age"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="date"
              name="age"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="datetime-local"
              name="age"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <TimePicker
              onChange={() => {
                onChange();
              }}
              value={value}
            />
            {/* if there is a button in form, it will close the modal */}
            <button className="btn w-full mb-2">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CreateAppointmentModal;
