import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => { //양식제출이벤트 발생시
    event.preventDefault(); //a태그나 submit태그를 누르면 href통해 이동하거나 새로고침되는데 그걸 막음
    if(toDo === ""){ //toDo가 비어있다면
      return; //return되도록 해서 함수가 작동하지 않도록 함 (return은 파괴(끝)할때인거같음..)
    }
    
    //toDos.push 자바였다면 이렇게 씀 .push는 배열의 끝에 요소를 추가할때 사용
    setToDo(""); //직접적으로 값수정
    setToDos(currentArray => [toDo, ]); //함수를 넣는 방법 //function(currentArray){}와 같은것
  };
  console.log(toDos);
  return (
    //submit이벤트
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
