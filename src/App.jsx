import { useState } from "react"
import { HomePage } from "./pages/HomePage"

function App() {

 const [visible,setVisible] = useState(true);
console.log(visible);

const [productList, setProductList] = useState([]);
const [cartList, setCartList] = useState([]);



// const cartArray = () => {
//   setValue(value+1)
//   setCartList([...cartList,product]);    
//   console.log(cartList);
  
// }

  return (
  <>
    <HomePage setVisible={setVisible} visible ={visible}/>
     
  </>
  )
}

export default App
