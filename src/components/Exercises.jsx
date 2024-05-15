import { useState, useEffect } from "react";
// import useFetchApi from "../utils/constants";
import { CgGym } from "react-icons/cg";
import Loader from "./Loader";

const Exercises = () => {
  const [exercise, setExercise] = useState([]);
  const [newExcercise, setNewExcercise] = useState([]);
  const [serchText, setSerchText] = useState("");

  const url = "https://exercisedb.p.rapidapi.com/exercises?limit=20";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "64bf17bc59mshe1c607373cdbdefp157212jsn896ee1b8af20",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  async function gymApi() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    gymApi().then((data) => {
      setExercise(data);
      setNewExcercise(data);
    });
    // console.log(exercise);
    // console.log(newExcercise);
  }, []);

  const gymExercise = [
    "BACK",
    "CARDIO",
    "CHEST",
    "UPPER ARMS",
    "LOWER LEGS",
    "NECK",
    "SHOULDERS",
    "UPPER ARMS",
    "UPPER LEGS",
    "WAIST",
  ];

  const serachByFilter = () => {
    console.log("Search text:", serchText);
    let filterByText = newExcercise.filter((item) => {
      return item.bodyPart.toLowerCase().includes(serchText.toLowerCase());
    });

    setExercise(filterByText);
    console.log(filterByText);
    setSerchText("");
  };

  const filterExercise = (clickedBodyPart) => {
    console.log("Clicked body part:", clickedBodyPart);
    let filterData = newExcercise.filter((item) => {
      return item.bodyPart.toLowerCase() === clickedBodyPart.toLowerCase();
    });
    setExercise(filterData);
    console.log(filterData);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-10">
            Awesome Exercises You Should Know
          </h1>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search Exercises"
            className="p-2 border-2 w-full sm:w-[400px]"
            value={serchText}
            onChange={(e) => setSerchText(e.target.value)}
          />
          <button
            className="bg-[#3B3D41] text-[#fff] p-2 rounded-lg w-full sm:w-auto"
            onClick={serachByFilter}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="flex justify-center p-5 mt-5">
        <div className="flex flex-wrap gap-10 w-[70%] justify-center items-center p-5 rounded-lg shadow-lg">
          {gymExercise.map((item, idx) => (
            <div
              key={idx}
              onClick={() => filterExercise(item)}
              className="flex flex-col justify-center items-center gap-5 p-5 w-[200px] rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <CgGym className="text-3xl" />
              <div className="text-2xl font-bold">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mt-5 p-10 w-[100%] justify-center items-center m-auto ">
        {exercise.length > 0 ? (
          exercise.map((data) => {
            return (
              <div key={data.id} className="rounded-lg shadow-lg">
                <img src={data.gifUrl} alt="exercise gifs" />
                <div className="flex gap-4 justify-center items-center p-3">
                  <h1 className="bg-[#7CEB7C] p-2 rounded-md">
                    {data.bodyPart}
                  </h1>
                  <h1 className="bg-[#7cd7eb] p-2 rounded-md">{data.target}</h1>
                  <h1 className="bg-[#ebbd7c] p-2 rounded-md">
                    {data.equipment}
                  </h1>
                </div>
                <p className="text-center text-xl font-bold p-2 mb-2">
                  {data.name.length > 20
                    ? data.name.slice(0, 20) + "..."
                    : data.name}
                </p>
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Exercises;
