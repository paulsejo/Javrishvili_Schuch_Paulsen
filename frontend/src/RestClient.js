export async function fetchAllDogs() {
  return await fetch("http://localhost:4000/dogs", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
