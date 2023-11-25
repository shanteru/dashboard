import { SideBar } from "../components/ui/sidebar"
import {CalendarDateRangePicker} from "../components/ui/datepicker"

export default function Home() {
  return(
    <>
      <h1>Dashboard</h1>
      <SideBar  />
      <CalendarDateRangePicker />
    </>
  );
}
