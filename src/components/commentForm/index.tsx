import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { Button } from "../ui";
import styled from "@emotion/styled";

type CommentFormValues = {
  by: string;
  parent: number;
  text: string;
  time: string;
  type: string;
};

type Props = {
  onClose: () => void;
  by: string;
  parent: number;
};

const CommentForm = ({ onClose, by, parent }: Props) => {
  const initialValues: CommentFormValues = {
    by: by,
    parent: parent,
    text: "",
    time: new Date().toUTCString(),
    type: "comment",
  };

  const handleSubmit = (
    values: CommentFormValues,
    { resetForm }: FormikHelpers<CommentFormValues>
  ) => {
    if (!values.text) {
      alert("Enter a comment.");
      return;
    }

    console.log("Submitted", values);

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Button bgColor="red" onClick={onClose}>
          Close Form
        </Button>

        <Input>
          <label htmlFor="text">Enter your comment</label>
          <Field as="textarea" id="text" name="text" />
          <ErrorMessage name="text" component="div" className="error" />
        </Input>

        <Button bgColor="lightgreen" type="submit">
          Send comment
        </Button>
      </Form>
    </Formik>
  );
};

export default CommentForm;

const Input = styled.div`
  display: flex;
  flex-direction: column;
`;
