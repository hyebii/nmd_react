import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    // if (keyword !== "" && keyword.length > 5) {
    //   //keyword가 빈값이 아니고 5보다 길 때
    //   console.log("SEARCH FOR", keyword);
    // }
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
