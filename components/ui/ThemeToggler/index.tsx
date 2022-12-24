import React, { ReactElement } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { UIComponents } from "components";

type ThemeTogglerProps = {
  extraSunClass?: string;
  extraMoonClass?: string;
};

const ThemeToggler = ({ extraSunClass = "", extraMoonClass = "" }: ThemeTogglerProps) => {
  const { Button } = UIComponents;
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const IconContainer = ({
    targetMode = "",
    extraClass = "",
    icon = <></>,
  }: {
    targetMode?: string;
    extraClass?: string;
    icon: ReactElement;
  }) => (
    <Button
      dimensionClass="w-[34px] h-[34px] mx-auto lg:mx-0"
      textBgClass={`text-[14px] cursor-pointer ${extraClass}`}
      onClick={() => setTheme(targetMode)}
    >
      {icon}
    </Button>
  );

  return currentTheme === "dark" ? (
    <IconContainer targetMode="light" extraClass={extraSunClass} icon={<SunIcon />} />
  ) : (
    <IconContainer targetMode="dark" extraClass={extraMoonClass} icon={<MoonIcon />} />
  );
};

export default ThemeToggler;
