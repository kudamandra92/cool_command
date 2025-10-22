import Sidebar from "../../components/Sidebar";
import Dropdown from "../../components/Dropdown";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex w-full p-8">
          <div>
            <Dropdown
              label={"Regional"}
              items={["Regional 1", "Regional 2", "Regional 3"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
