import { useEffect, useState } from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);//기본값은 비어있는 배열
  const [text, setText] = useState('');
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json()) //response를 받아서 response.json을 return함
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []) //한번만 사용
  const onChange = (e) => setText(e.target.value);
  const onClick = () => {}
  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
         <strong>Loading...</strong> 
        ) : (
        <select>
          {coins.map((coin) => ( 
            //tickers에서 id를 가지고 있으니 따로 key안만들고 id를 key로 씀
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option> //coin은 array안에 있는 각각의 coin을 의미함
          ))}
        </select>
      )}
      <hr />
      <form>
        <label>convert </label>
        <input value={text} onChange={onChange} on placeholder="enter" />
        <button onClick={onClick} >confirm</button>
      </form>
      <form>
        <label>result </label>
      </form>
      
    </div>
  )
}

export default App;