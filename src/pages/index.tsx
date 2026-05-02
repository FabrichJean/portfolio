import Header from "../components/header"
import Service from "../components/service"
import Team from "../components/team"

const PrincipalPage = () => {
  return (
    <div className="min-h-screen  bg-white">
      {/* header */}
      <Header />

      <Service/>

      <Team/>
    </div>
  )
}

export default PrincipalPage