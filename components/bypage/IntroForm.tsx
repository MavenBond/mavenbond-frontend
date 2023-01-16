import dynamic from "next/dynamic";
import { angry, happy } from "utils/toaster";
import IntroStyles from "styles/Intro.module.css";
import { useAuth } from "context/useAuth";
import { useState } from "react";
import { supabaseClient } from "supabase/supbaseClient";
import Router from "next/router";
import api from "api";

const Button = dynamic(() => import("components/common/Button"));

const IntroForm = () => {
  const { profile } = useAuth();
  const [role, setRole] = useState<"business" | "influencer">("business");
  const [isRoleUpdating, setRoleUpdating] = useState<boolean>(false);
  const ROLE_TEXTS = {
    business: "to promote my business",
    influencer: "to grow their brand",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRoleChange = (e: any) => setRole(e.target.value);
  const handleGo = async () => {
    setRoleUpdating(true);
    const { error: updateDbError } = await supabaseClient
      .from("profiles")
      .update({
        user_role: role,
        updated_at: new Date().toISOString(),
      })
      .eq("id", profile?.id);

    // if error updating
    if (updateDbError) {
      angry(updateDbError?.message);
      setRoleUpdating(false);
      return;
    }

    const insertUserRes = await api.post(`/${role}/signup`, {
      type: role,
      id: profile?.id,
      email: profile?.email,
      full_name: profile?.full_name,
      avatar_url: profile?.avatar_url,
    });

    const insertSuccess =
      (await insertUserRes.status) === 201 || (await insertUserRes.status) === 200;
    if (!insertSuccess) {
      angry("Unable to insert user to database");
      setRoleUpdating(false);
      return;
    }

    // if success first time
    happy("You're all good!");
    setTimeout(() => {
      setRoleUpdating(false);
      setTimeout(() => {
        Router.push("/dashboard");
      }, 500);
    }, 1000);
  };
  return (
    <>
      <div className='flex items-center gap-0 lg:gap-4'>
        <select
          className={IntroStyles.selectWrapper}
          defaultValue='business'
          onChange={handleRoleChange}
        >
          <option className='scale-75 md:scale-100' value='business'>
            Influencers
          </option>
          <option className='scale-75 md:scale-100' value='influencer'>
            Businesses
          </option>
        </select>
        <span className='text-[0.9rem] md:text-[1.4rem] pr-3 font-bold'>
          {ROLE_TEXTS[`${role}`]}
        </span>
      </div>

      <Button isLoading={isRoleUpdating} onClick={handleGo} className={IntroStyles.letgoBtn}>
        LET'S GOOO!
      </Button>
    </>
  );
};

export default IntroForm;
