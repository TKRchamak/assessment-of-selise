import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { GiCancel } from "react-icons/gi";
import { serverUrl } from "../../Redux";

type AppointmentType = {
  name?: string;
  gender?: string;
  age?: string;
  date: string;
  time: string;
};

const CreateAppointmentModal = ({
  modalStatus = false,
  setModalStatus,
}: {
  modalStatus: boolean;
  setModalStatus: Dispatch<SetStateAction<boolean>>;
}) => {
  // const [inputFieldData, setInputFieldData] = useState<AppointmentType>();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: AppointmentType | any) => {
    console.log(data);
    try {
      const response = await axios.post(`${serverUrl}/events`, data);
      console.log(response);
      setModalStatus(false);
      reset({
        name: "",
        gender: "male",
        age: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.log("createProjectRequest error", error);
      alert("task not create");
    }
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_6"
        checked={modalStatus}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <div className="relative">
            <h3 className="font-bold text-center mb-4 uppercase">
              Put Your data
            </h3>
            <button
              className="absolute top-0 right-2"
              onClick={() => {
                setModalStatus(false);
              }}
            >
              <GiCancel size={22} />
            </button>
          </div>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full mb-2"
            />
            <div className="w-full mt-1 mb-3 flex justify-start items-center">
              <label className="ms-2">Gender :</label>
              <div className="flex justify-start items-center mx-14">
                <input
                  {...register("gender")}
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
                  {...register("gender")}
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
              {...register("age")}
              type="text"
              name="age"
              placeholder="Age"
              className="input input-bordered w-full mb-2"
            />

            <input
              {...register("date")}
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered w-full mb-2"
            />

            <input
              {...register("time")}
              type="time"
              name="time"
              placeholder="time"
              className="input input-bordered w-full mb-2"
            />
            <button className="btn w-full mb-2">Create Appointment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAppointmentModal;
