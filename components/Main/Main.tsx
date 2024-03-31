import Hours from "./Hours/Hours"
import Profile from "./Profile/Profile"
import Schedule from "./Schedules/Schedule"


function Main() {
  return (
    <section className="ml-9 w-full h-screen p-6  bg-gray-50 ">
    <Profile/>
    <Hours/>
    <Schedule/>
    </section>
  )
}

export default Main