import Sidebar from "../../components/Sidebar";
import Dropdown from "../../components/Dropdown";
import ChartBar from "../../components/ChartBar";
import ChartLine from "../../components/ChartLine";
import Topbar from "../../components/Topbar";

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
        <div className="sm:hidden">
          <Topbar />
        </div>
        <div className="flex flex-col w-full p-8 gap-4">
          <div className="flex flex-col sm:flex-row w-full justify-between">
            <div className="flex flex-col sm:flex-row">
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
            <ChartBar title="Power Consumption" />
          </div>

          <div>
            <ChartLine title="Temperature & Humidity" />
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between h-56 p-4 gap-8 ">
            <div className="flex flex-col w-full bg-greenish p-6 rounded-xl items-center justify-between text-yellowish">
              <h1>kudamandra</h1>
              <h1>kudamandra</h1>
              <h1>kudamandra</h1>
            </div>
            <div className="flex flex-col w-full bg-greenish p-6 rounded-xl items-center">
              kudamandra
            </div>
            <div className="flex flex-col w-full bg-limeish">kudamandra</div>
            <div className="flex flex-col w-full bg-limeish">kudamandra</div>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between h-72 bg-greenish">
            <p>kudamandra</p>
            <p>kudamandra</p>
            <p>kudamandra</p>
            <p>kudamandra</p>
          </div>
        </div>
      </div>
    </div>
  );
}
