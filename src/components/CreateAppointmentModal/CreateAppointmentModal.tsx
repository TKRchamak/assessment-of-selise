import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

type AppointmentType = {
  name?: string;
  gender?: string;
  age?: string;
  date: string;
  time: string;
};

const CreateAppointmentModal = () => {
  const [value, onChange] = useState("10:00");
  const [inputFieldData, setInputFieldData] = useState<AppointmentType>();

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            <input
              type="Name"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full mb-2"
            />
            <div className="w-full mt-1 mb-3 flex justify-start items-center">
              <label className="ms-2">Gender :</label>
              <div className="flex justify-start items-center mx-14">
                <input
                  type="radio"
                  name="gender"
                  className="radio radio-primary me-1"
                  id="male"
                  value="male"
                  checked
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex justify-start items-center">
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  className="radio radio-primary me-1"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <input
              type="Age"
              name="age"
              placeholder="Age"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="date"
              name="age"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />

            <input
              type="time"
              name="age"
              placeholder="Type here"
              className="input input-bordered w-full mb-2"
            />
            {/* <TimePicker onChange={onChange} value={value} isOpen={false} /> */}
            {/* if there is a button in form, it will close the modal */}
            <button className="btn w-full mb-2">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default CreateAppointmentModal;
