import Header from "./components/Header";
import MainSection from "./components/Main";

function App() {
  console.log(import.meta.env.VITE_RECIPE_API);
  return (
    <>
      <Header />
      <MainSection />
    </>
  );
}

export default App;
