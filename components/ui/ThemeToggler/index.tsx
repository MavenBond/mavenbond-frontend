import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { ReactElement, useEffect } from "react";

const Button = dynamic(() => import("components/ui/Button"));
type ThemeTogglerProps = {
  extraSunClass?: string;
  extraMoonClass?: string;
};

const ThemeToggler = ({ extraSunClass = "", extraMoonClass = "" }: ThemeTogglerProps) => {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // set init theme for daisy ui
  useEffect(() => {
    document.getElementsByTagName("html")[0].dataset.theme = currentTheme;
  }, []);

  const _IconContainer = ({
    targetMode = "",
    extraClass = "",
    icon = <></>,
  }: {
    targetMode?: string;
    extraClass?: string;
    icon: ReactElement;
  }) => (
    <Button
      className={`w-9 h-9 cursor-pointer ${extraClass}`}
      onClick={() => {
        setTheme(targetMode);

        // set theme for daisy ui, it is reversed comparing to tailwindcss mode
        document.getElementsByTagName("html")[0].dataset.theme = targetMode;
      }}
    >
      {icon}
    </Button>
  );

  return currentTheme === "dark" ? (
    <_IconContainer targetMode='light' extraClass={extraSunClass} icon={<SunIcon />} />
  ) : (
    <_IconContainer targetMode='dark' extraClass={extraMoonClass} icon={<MoonIcon />} />
  );
};

export default ThemeToggler;
