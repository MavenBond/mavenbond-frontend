import type { FieldValues } from "react-hook-form";
import type { Schema } from "zod";
import { angry } from "utils/toaster";
import { supabaseClient } from "supabase/supbaseClient";

// private method to work with schemas
export const _executeSchema = (schema: Schema, data: FieldValues, callback?: () => void) => {
  // used schema to validate
  const executedSchema = schema.safeParse(data);

  // DEV
  // console.log(executedSchema);

  // FORM DATA IS INVALID
  if (!executedSchema.success) {
    // if error, toast error (form validation)
    angry(executedSchema.error.issues[0].message);

    // DEV
    console.log(executedSchema.error.issues);

    // reset submitting state
    callback && callback();
    return [false, {}];
  }

  return [true, executedSchema];
};

// download image from storage if account has no profile pic from Google
export const _downloadImage = async (path: string, callback: (imgUrl: string) => void) => {
  try {
    const { data: downloadImgData, error: downloadImgError } = await supabaseClient.storage
      .from("avatars")
      .download(path);
    if (downloadImgError) console.log(downloadImgError.message);
    else {
      const imgUrl = URL.createObjectURL(downloadImgData);
      callback(imgUrl);
    }
  } catch (error) {
    console.log(`Error downloading image: ${error}`);
  }
};
