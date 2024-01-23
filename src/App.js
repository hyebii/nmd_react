import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  //function이 작동할 때 argument로 event를 받음
  //event를 발생시킨 input에서 value를 받아서 keyword state에 넣어줌
  //이 keyword를 가져와서 input의 value로 사용하면 원할 때 input 조작가능
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("call the api...");
  }, []);
  useEffect(() => {
    console.log("search for", keyword);
  }, [keyword]); //keyword가 변화할 때 코드를 실행!
  // console.log("Search for", keyword);
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
    //클릭할때마다 Search for keyword 가 계속 뜸 -> 계속 검색됨
    //search keyword에 변화가 있을 때만 검색
    //counter가 변화할때도 검색하고 싶진 않음
  );
}

export default App;
