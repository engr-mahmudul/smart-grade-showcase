import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import StudentTable from "./components/StudentTable";
export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <HeroSection />
      <StudentTable />
      <Footer />
    </div>
  );
}
