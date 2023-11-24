import Navbar from "./components/Navbar"
import { createSignal } from "solid-js";
import { Router, Route, Routes } from "@solidjs/router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import TvShowDetail from "./pages/TvShowDetail";

function App() {

  const [text, setText] = createSignal()

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <header className="max-w-screen-xl m-auto">
        <Navbar />
      </header>

      <main className="container mx-auto mt-4">
        <Routes>
          <Route path='/' component={Home} />
          <Route path='/filmy' component={Movies} />
          <Route path='/filmy/:movieid' component={MovieDetail} />
          <Route path='/seriale/:tvshowid' component={TvShowDetail} />
        </Routes>
      </main> 
    </div>  
  )
}

export default App
