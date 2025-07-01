"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type UploadFormInputProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const UploadFormInput = ({ onSubmit }: UploadFormInputProps) => {
  return (
    <form
      className="flex flex-col items-center justify-center gap-6"
      onSubmit={onSubmit}
    >
      <div className="flex gap-1.5  z-10 w-full justify-end items-center">
        <Input
          type="file"
          accept="application/pdf"
          required
          name="file"
          id="file"
          className=""
        />
        <Button> Submit Your PDF</Button>
      </div>
    </form>
  );
};

export default UploadFormInput;
