import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return;
    }
    //현재toDos(=currentArray)를 불러와서 새로운 toDo의 array로 return함 (반환의 의미일듯)
    setToDos(currentArray => [toDo, ...currentArray]); //...currentArray, toDo 하면 반대순서로 입력
    setToDo("");
  };
  const onClick= () => setToDos([]);
  //filter 데이터(여기서는 배열)를 새로 필터링
  // const onDelete = e => {
  //   const li = e.target.parentElement;
  //   li.remove();
  // }
  const onDelete = index => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex)); //index같은거 제외하고 나머지를 새로운 배열로 만들어서 저장 (필터링) 
  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (//array를 가져와서 array의 item들을 변형해서 li가 되도록함  //<li key={0,1,2 ...}>{item}</li>
          <div key={index}>
            <li>
              {item}
            </li>
            <button onClick={() => onDelete(index)}>X</button>
          </div>
        ))}
      </ul>
      <button onClick={onClick}>reset</button>
    </div>
    //map() ->자바스크립트함수
    //array의 모든 item에 대해 실행됨, 무엇을 return하던지 그 값이 새로운 array에 들어가있음
    //하나의 array에 있는 각 item을 내가 원하는 무엇이든지로 바꿔줌 => 새로운 array로 return해줌

    //()에 함수를 넣을 수 있음 -> 모든 item에 대해 실행됨
    //(item) 함수의 첫번째 argument가 진행되고 있는 순서에 맞는 item
  );
}

export default App;

//return
//함수 실행 종료
//주어진 값을 함수 호출 지점으로 반환 (명시하지 않으면 undefined를 반환)

// if(toDo === ""){
//   return;
// }
//이렇게 쓰일 때는 if문의 조건을 만족하면 해당함수를 중단하고 해당 "함수"자체에서 빠져나가라는 의미