import { NavLink } from "react-router-dom";

import { Icon } from "../Icon";
import { StyledFlexRow } from "../StyledFlexRow";

import { INavigationItem } from "./models";
import { getLinkClassName } from "./utils";

export interface IAppNavigationProps {
  items: INavigationItem[];
}

export const AppNavigation = ({ items }: IAppNavigationProps) => {
  return (
    <nav>
      <ul className="plain-list">
        {items.map(({ to, icon, text }: INavigationItem) => (
          <li key={text}>
            <NavLink to={to} className={getLinkClassName}>
              <StyledFlexRow>
                <Icon className="mr" icon={icon} />
                {text}
              </StyledFlexRow>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
