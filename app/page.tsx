
import Nav from "./components/nav";
import HomePage from "./components/home";
import Proyectos from "./components/proyectos";
import About from "./components/about";
import Contact from "./components/contacto";

export default function Home() {
  return (
    <>
      <Nav/>
      <HomePage/>
      <Proyectos/>
      <About/>
      <Contact/>
    </>
  )
}
