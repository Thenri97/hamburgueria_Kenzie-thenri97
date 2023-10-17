import { useState, useEffect } from "react"
import { HomePage } from "./pages/HomePage"

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
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
    console.log("Ocorreu uma atualização");
  }, [cartList])


  useEffect(() => {
    localStorage.setItem("@VALUE", JSON.stringify(value));
  }, [value])

  return (
    <>
      <HomePage setVisible={setVisible}
        visible={visible}
        cartList={cartList}
        setCartList={setCartList}
        value={value}
        setValue={setValue} />

    </>
  )
}

export default App
