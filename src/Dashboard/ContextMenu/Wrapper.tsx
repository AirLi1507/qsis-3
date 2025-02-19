import { ContextMenu } from "radix-ui";
import CnMenuItem from "./Item";
import { Menus } from "./Menu";

type WrapperProps = {
  children: React.ReactNode
}

const CnMenuWrapper = ({children}: WrapperProps) =>{

  return (
    <ContextMenu.Root modal={false}>
      <ContextMenu.Trigger>
        {children}
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content className="contextMenuContent">
          {
            getSelection.toString() ? 
            
            (
              <>
                {Menus()[0].map((item, i) => (
                  <CnMenuItem menuItem={item} key={i} />
                ))}
                <hr className="my-1 border-t-2 border-t-zinc-200" />
                {Menus()[1].map((item, i) => (
                  <CnMenuItem menuItem={item} key={i} />
                ))}
              </>
            )
            :
            (
              <>
                Copy
              </>
            )
          }
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export default CnMenuWrapper