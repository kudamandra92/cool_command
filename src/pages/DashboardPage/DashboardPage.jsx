import Sidebar from "../../components/Sidebar";
import Dropdown from "../../components/Dropdown";
import ChartBar from "../../components/ChartBar";

export default function DashboardPage() {
  const dataSet = {
    room: ["Room 1", "Room 2", "Room 3", "Room 4", "Room 5"],
    regional: ["Regional 1", "Regional 2", "Regional 3", "Regional 4"],
    witel: [
      "Witel Kaltimtara",
      "Witel Kalbar",
      "Witel Kalselteng",
      "Witel Balikpapan",
    ],
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="hidden sm:flex">
          <Sidebar />
        </div>
        <div className="sm:hidden">+</div>
        <div className="flex flex-col w-full p-8 gap-4">
          <div className="flex w-full bg-limeish justify-between">
            <div className="flex">
              <div>
                <Dropdown label={"Regional"} items={dataSet.regional} />
              </div>
              <div>
                <Dropdown label={"Witel"} items={dataSet.witel} />
              </div>
              <div>
                <Dropdown
                  label={"Regional"}
                  items={["Regional 1", "Regional 2", "Regional 3"]}
                />
              </div>
            </div>
            <div>
              <Dropdown label={"Room"} items={dataSet.room} />
            </div>
          </div>

          <div>
            <ChartBar />
          </div>
        </div>
      </div>
    </div>
  );
}
