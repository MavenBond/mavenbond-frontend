import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const supabaseClient = createBrowserSupabaseClient();

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

export const signUpEmailPwd = async (
  email: string,
  password: string,
  metadata: Record<string, string>
) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password,
    options: {
      data: {
        ...metadata,
      },
    },
  });
  return { data, error };
};

export const signInGoogle = async () => {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo:
        process.env.NODE_ENV === "development"
          ? "http://localhost:1234/login"
          : "https://mavenbond-v1.vercel.app/",
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
  const { data, error } = await supabaseClient.auth.getUser();
  return { data, error };
};

/*
- In order to use the updateUser() method, the user needs to be signed in first.
- By Default, email updates sends a confirmation link to both the user's current and new email. 
To only send a confirmation link to the user's new email, 
disable Secure email change in your project's email auth provider settings.
*/
export const updateUserData = async (
  updateInfos: Record<string, string | Record<string, string>>
) => {
  const { data, error } = await supabaseClient.auth.updateUser(updateInfos);
  return { data, error };
};
