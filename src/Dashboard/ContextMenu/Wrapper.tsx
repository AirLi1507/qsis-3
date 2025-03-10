import { ContextMenu } from "radix-ui";
import CnMenuItem from "./Item";
import { Menus } from "./Menu";
import { createContext } from "react";

type WrapperProps = {
  children: React.ReactNode
}

const MyContextMenu = {
  Root: createContext({}),
  Wrapper: () => {
    return (
      <MyContextMenu.Root.Provider value={{idl: 'idk'}}>
        <div>idk</div>
      </MyContextMenu.Root.Provider>
    )
  }
}

const CnMenuWrapper = ({children}: WrapperProps) =>{

  return (
    <ContextMenu.Root modal={false}>
      <ContextMenu.Trigger>
        {children}
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="contextMenuContent">
          {Menus()[0].map((item, i) => (
            <CnMenuItem menuItem={item} key={i} />
          ))}
          <hr className="my-1 border-t-2 border-t-zinc-200" />
          {Menus()[1].map((item, i) => (
            <CnMenuItem menuItem={item} key={i} />
          ))}
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export default CnMenuWrapper
