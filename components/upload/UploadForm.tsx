"use client";
import React from "react";
import UploadFormInput from "./UploadFormInput";
import { z } from "zod";

const fileSchema = z.object({
  file: z
    .instanceof(File, { message: "Invalid File" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File must be less than 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

const UploadForm = () => {
  return (
    <div className="flex flex-col gap-8  w-full mx-auto max-w-2xl">
      <UploadFormInput
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
          const formData = new FormData(e.currentTarget);
          const file = formData.get("file") as File;

          const validatedFile = fileSchema.safeParse({ file });
          if (!validatedFile.success) {
            console.log(
              validatedFile.error.flatten().fieldErrors.file?.[0] ??
                "Invalid File"
            );
            return;
          }
        }}
      />
    </div>
  );
};

export default UploadForm;
