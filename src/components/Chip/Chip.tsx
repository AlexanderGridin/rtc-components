import MuiChip from "@mui/material/Chip";

import { IChildren, IClassName } from "shared/models";

export interface IChipProps extends Required<IChildren>, IClassName {
  textColor?: string;
  backgroundColor?: string;
}

export const Chip = ({
  className,
  textColor = "#000",
  backgroundColor = "rgba(0, 0, 0, 0.08)",
  children,
}: IChipProps) => {
  return (
    <MuiChip label={children} className={className} sx={{ fontSize: "14px", backgroundColor, color: textColor }} />
  );
};
