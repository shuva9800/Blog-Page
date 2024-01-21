import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";



export default function App() {

  const{fetchData}=useContext(AppContext);
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="container">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}
