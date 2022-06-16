import { ReactNode } from "react";
import TinaCMS from "tinacms";
import { tinaConfig } from "../../../.tina/schema";

type Props = {
  children: ReactNode;
};
export function TinaProvider({ children }: Props) {
  return <TinaCMS {...(tinaConfig as any)}>{children}</TinaCMS>;
}
