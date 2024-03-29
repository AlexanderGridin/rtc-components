import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MaterialIcon } from "../Icon";

import { IconButton } from "./IconButton";
import { IconButtonTestId } from "./static-data";

const { Button, Icon, Placeholder } = IconButtonTestId;

describe("IconButton", () => {
  it("renders with placeholder", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<IconButton data-testid={Button} icon={MaterialIcon.None} onClick={handleClick} />);

    expect(screen.getByTestId(Button)).toBeInTheDocument();
    expect(screen.getByTestId(Placeholder)).toBeInTheDocument();

    expect(screen.queryByTestId(Icon)).toBeNull();

    await user.click(screen.getByTestId(Button));
    expect(handleClick).toBeCalledTimes(1);
  });

  it("renders with icon", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<IconButton data-testid={Button} icon={MaterialIcon.Home} onClick={handleClick} />);

    expect(screen.getByTestId(Button)).toBeInTheDocument();
    expect(screen.getByTestId(Icon)).toBeInTheDocument();

    expect(screen.queryByTestId(Placeholder)).toBeNull();

    await user.click(screen.getByTestId(Button));
    expect(handleClick).toBeCalledTimes(1);
  });
});
