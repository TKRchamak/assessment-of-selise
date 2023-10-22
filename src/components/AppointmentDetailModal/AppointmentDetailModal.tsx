import { Dispatch, SetStateAction } from "react";
import { GiCancel } from "react-icons/gi";
import { useSelector } from "react-redux";

const AppointmentDetailModal = ({
  detailModalStatus,
  setDetailModalStatus,
}: {
  detailModalStatus: boolean;
  setDetailModalStatus: Dispatch<SetStateAction<boolean>>;
}) => {
  const selectedAppointmentData = useSelector(
    (state: any) => state?.appointment?.selectedAppointmentData
  );

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_6"
        checked={detailModalStatus}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <div className="relative">
            <h3 className="font-bold text-center mb-4 uppercase">
              Appointment Detail
            </h3>
            <button
              className="absolute top-0 right-2"
              onClick={() => {
                setDetailModalStatus(false);
              }}
            >
              <GiCancel size={22} />
            </button>
            <div>
              <div className="flex items-center justify-between mx-12">
                <p>{"Name"}</p>
                <p>{selectedAppointmentData?.name}</p>
              </div>
              <div className="flex items-center justify-between mx-12">
                <p>{"Gender"}</p>
                <p>{selectedAppointmentData?.gender}</p>
              </div>
              <div className="flex items-center justify-between mx-12">
                <p>{"Age"}</p>
                <p>{selectedAppointmentData?.age}</p>
              </div>
              <div className="flex items-center justify-between mx-12">
                <p>{"Date"}</p>
                <p>{selectedAppointmentData?.date}</p>
              </div>
              <div className="flex items-center justify-between mx-12">
                <p>{"Time"}</p>
                <p>{selectedAppointmentData?.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailModal;
