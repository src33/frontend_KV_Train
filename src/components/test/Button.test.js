import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Buttons";

describe("Check if Button works properly", () => {
   test("Check if button is rendered correctly", () => {
      const { getByTestId } = render(<Button />);
      const element = getByTestId("button-test-id");
      expect(element).toBeTruthy();
   });

   test("Check if text is displayed correctly", () => {
      const text = "Click";
      const { getByText } = render(<Button text={text} />);
      getByText(text);
   });

   test("check if onClick is triggered", () => {
      const onClick = jest.fn();

      const { getByTestId } = render(<Button handleClick={onClick} />);
      const element = getByTestId("button-test-id");

      fireEvent.click(element);

      expect(onClick).toHaveBeenCalled();
   });
   test("check if snapshots are matched properly", () => {
      const onClick = jest.fn();

      const text = "Click";

      const { asFragment } = render(<Button text={text} handleClick={onClick} />);

      expect(asFragment()).toMatchSnapshot();
   });
});
