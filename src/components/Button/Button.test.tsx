import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import { MaterialIcon } from "../Icon";

import { Button as ButtonComponent } from "./Button";
import { ButtonTestId } from "./static-data";

const { Button, Icon, Text } = ButtonTestId;

describe("Button", () => {
  it("renders without icon", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(
      <ButtonComponent data-testid={Button} onClick={handleClick}>
        Button text
      </ButtonComponent>
    );

    const button = screen.getByTestId(Button);
    await act(async () => {
      await user.click(button);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);

    const buttonIcon = screen.queryByTestId(Icon);
    expect(buttonIcon).toBeNull();

    const buttonText = screen.getByTestId(Text);
    expect(buttonText).toBeInTheDocument();
  });

  it("renders with icon", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(
      <ButtonComponent data-testid={Button} icon={MaterialIcon.Add} onClick={handleClick}>
        Test
      </ButtonComponent>
    );

    const button = screen.getByTestId(Button);
    await act(async () => {
      await user.click(button);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);

    const buttonIcon = screen.getByTestId(Icon);
    expect(buttonIcon).toBeInTheDocument();

    const buttonText = screen.getByTestId(Text);
    expect(buttonText).toBeInTheDocument();
  });

  it("renders with icon only", async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<ButtonComponent data-testid={Button} icon={MaterialIcon.Add} isIconOnly onClick={handleClick} />);

    const button = screen.getByTestId(Button);
    await act(async () => {
      await user.click(button);
    });
    expect(handleClick).toHaveBeenCalledTimes(1);

    const buttonIcon = screen.getByTestId(Icon);
    expect(buttonIcon).toBeInTheDocument();

    const buttonText = screen.queryByTestId(Text);
    expect(buttonText).toBeNull();
  });
});
