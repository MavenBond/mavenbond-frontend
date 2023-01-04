import { createClient } from "@supabase/supabase-js";

const getSupabase = () => {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error(
      "Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY env variables"
    );
  }
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
};

export const supabaseClient = getSupabase();

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();
  return { error };
};

export const signInEmailPwd = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signUpEmailPwd = async (email: string, password: string) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signInGoogle = async () => {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:1234",
    },
  });
  return { data, error };
};

/*
Returns the session, refreshing it if necessary. 
The session returned can be null if the session is not detected 
which can happen in the event a user is not signed-in or has logged out.
*/
export const getSessionData = async () => {
  const { data, error } = await supabaseClient.auth.getSession();
  return { data, error };
};

/* Gets the current user details if there is an existing session. */
export const getUserData = async () => {
  const {
    data: { user },
    error,
  } = await supabaseClient.auth.getUser();
  return { user, error };
};

/*
- In order to use the updateUser() method, the user needs to be signed in first.
- By Default, email updates sends a confirmation link to both the user's current and new email. 
To only send a confirmation link to the user's new email, 
disable Secure email change in your project's email auth provider settings.
*/
export const updateUserData = async (updateInfos: { [key: string]: string }) => {
  const { data, error } = await supabaseClient.auth.updateUser(updateInfos);
  return { data, error };
};
