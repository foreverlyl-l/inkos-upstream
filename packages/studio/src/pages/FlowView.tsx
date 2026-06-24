import type { Theme } from "../hooks/use-theme";
import type { TFunction } from "../hooks/use-i18n";

interface Nav {
  toDashboard: () => void;
  toFlow: (id: string) => void;
}

export default function FlowView({
  projectId,
  nav,
  theme,
  t,
}: {
  projectId: string;
  nav: Nav;
  theme: Theme;
  t: TFunction;
}) {
  return <div data-testid="flow-view" />;
}
