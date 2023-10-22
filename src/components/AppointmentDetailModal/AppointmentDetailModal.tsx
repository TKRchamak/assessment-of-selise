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

  // {
  //   "id": 1,
  //   "title": "event 2",
  //   "start": "2023-10-22",
  //   "end": "2023-10-23",
  //   "allDay": true,
  //   "HostName": "William"
  // }

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
              <div>
                <p>{"title"}</p>
                <p>{selectedAppointmentData?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetailModal;
