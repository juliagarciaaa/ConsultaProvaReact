import { ComponentFooter, ComponentHeader } from "./components";
import { PageHome, PageList, } from "./pages";
import { GlobalStyle, Main } from "./styles/GlobalStyle";
import { Dispatch, SetStateAction, useState } from "react";
import { PageInfo } from "./pages/index";

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}
export function App() {
  const [page, setPage] = useState(1)
  let component
  switch (page) { //fez um switch para saber qual será o valor de component e o que eel vai fazer
    case 1:
      component = <PageHome />
      break;
    case 2:
      component = <PageList />
      break;
    default:
      component = <PageHome />
      break;
      case 3:
        component = <PageInfo/>
        break;
  }
  return (
    <>
      <GlobalStyle />
      <ComponentHeader setPage={setPage} />
      <Main>
        {component}
      </Main>
      <ComponentFooter />
    </>
  )
}

