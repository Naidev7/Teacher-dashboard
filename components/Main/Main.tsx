import Hours from "./Hours/Hours"
import Profile from "./Profile/Profile"
import Schedule from "./Schedules/Schedule"


function Main() {
  return (
    <section className="ml-9 w-full h-full p-6 bg-gray-100">
    <Profile/>
    <Hours/>
    <Schedule/>
    </section>
  )
}

export default Main