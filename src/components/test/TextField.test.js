import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import TextField from "../TextField";

describe("Check if textfields are working properly", () => {
   test("Check if textfields are rendered", () => {
      const { getByTestId } = render(<TextField />);
      const element = getByTestId("textField-test-id");

      expect(element).toBeTruthy();
   });
   test("Check if value is displayed correctly", () => {
      const text = "value";
      const { getByDisplayValue } = render(<TextField value={text} />);
      getByDisplayValue(text);
   });
   test("Check if placeholder is displayed correctly", () => {
      const text = "placeholder";
      const { getByPlaceholderText } = render(<TextField label={text} />);
      getByPlaceholderText(text);
   });
   test("Check if onChange is triggered", () => {
      const onChange = jest.fn();
      const { getByTestId } = render(<TextField onChange={onChange} />);
      const element = getByTestId("textField-test-id");
      fireEvent.change(element, { target: { value: "a" } });

      expect(onChange).toHaveBeenCalled();
   });
   test("Check input is received", () => {
      const { getByTestId } = render(<TextField value="" />);
      const element = getByTestId("textField-test-id");

      fireEvent.change(element, { target: { value: "sample" } });
      expect(element.value).toBe("sample");
   });
   test.skip("Check if labels are displayed correctly", () => {
      const text = "label";
      const { } = render(<TextField label={text} />);
      const element =  getByTestId("textFieldLabel-test-id");
        const {getByLabelText}=
      expect(getByLabelText()).toBe(text);
   });
   test("Check if snapshots is matched properly", () => {
    const onChange = jest.fn();
    const text = "value";
    const { asFragment } = render(<TextField onChange={onChange} value={text}/>);
    
    expect(asFragment()).toMatchSnapshot();
 });

});
