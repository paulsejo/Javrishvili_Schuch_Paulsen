export async function fetchAllDogs() {
  return await fetch("http://localhost:4000/pets/dogs/", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
