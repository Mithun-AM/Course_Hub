import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner.jsx";
import { apiUrl, filterData } from "./data.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // console.log(output.data);
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>

        <div className="w-11/12 max-w-[1200px]  mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }

        </div>
      </div>

    </div>
  );
}

export default App;
