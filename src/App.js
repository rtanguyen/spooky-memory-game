import Start from "./pages/Start";
import "./App.css";

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   require.context("../src/assets/images", false, /\.(jpg)$/)
// );

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../src/assets/images", false, /\.(jpg)$/)
  );
  console.log(images[1]);
  return <div className="App"></div>;
}

export default App;
