import { ReactNode } from "react";
import { TinaEditProvider } from "tinacms/dist/edit-state";
import { TinaProvider } from "./TinaProvider";

type Props = {
  children: ReactNode;
};
export function TinaDynamicProvider({ children }: Props) {
  return (
    <TinaEditProvider editMode={<TinaProvider>{children}</TinaProvider>}>
      {children}
    </TinaEditProvider>
  );
}
