import { useState, useEffect } from "react"
import { HomePage } from "./pages/HomePage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const getLocalItems = (JSON.parse(localStorage.getItem("@CARTLIST")))
  const getValue = (JSON.parse(localStorage.getItem("@VALUE")))
  
  const [value, setValue] = useState(
    getValue ? getValue : 0
  );
  const [visible, setVisible] = useState(true);
  const [cartList, setCartList] = useState(
    getLocalItems ? getLocalItems : []
  );
 
  useEffect(() => {
    console.log("Ocorreu uma atualização");
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
    const localItem = JSON.parse(localStorage.getItem("@CARTLIST"))
    console.log(localItem);
   
  }, [cartList])


  useEffect(() => {
    localStorage.setItem("@VALUE", JSON.stringify(value));
  }, [value])

  return (
    <>
     <ToastContainer
     autoClose={1000}/>
      <HomePage setVisible={setVisible}
        visible={visible}
        cartList={cartList}
        setCartList={setCartList}
        value={value}
        setValue={setValue}
         />

    </>
  )
}

export default App
