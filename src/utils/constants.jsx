// // import { useState } from "react";
// const useFetchApi = () => {
//   // const [gymExcer, setGymExcer] = useState([]);

//   const url =
//     "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "b4668ddb26msh62b2989f56dcab5p1fd7c8jsn1527eff16a45",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };
//   async function gymApi() {
//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       // console.log(result);
//       return result;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return { gymApi };
// };

// export default useFetchApi;
