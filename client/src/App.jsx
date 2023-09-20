import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Campaign from "./components/Campaigns";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Campaign />
    <Transactions />
    <Footer />
  </div>
);

export default App;
