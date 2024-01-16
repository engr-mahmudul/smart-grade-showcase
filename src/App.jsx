import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}
