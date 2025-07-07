import { IconAddressBook } from "@tabler/icons-react"
import Tab from "../../components/dashboard/home/tab"
import Topbar from "../../components/dashboard/topbar"

const Home = () => {
  return (
    <>
      <Topbar title="Quick Navigation" rounded />
      <div className="h-fit mt-4 flex flex-col md:grid md:grid-cols-2 gap-4 px-2 pb-4">
        <Tab href="profile" icon={IconAddressBook} title="Student Profile" description="odl" />
        <Tab href="profile" icon={IconAddressBook} title="Student Profile" description="odl" />
        <Tab href="profile" icon={IconAddressBook} title="Student Profile" description="odl" />
        <Tab href="profile" icon={IconAddressBook} title="Student Profile" description="odl" />
        <Tab href="profile" icon={IconAddressBook} title="Student Profile" description="odl" />
      </div>
    </>
  )
}

export default Home
