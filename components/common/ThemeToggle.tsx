import dynamic from "next/dynamic";
import { ReactElement, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const Button = dynamic(() => import("components/common/Button"));
type ThemeToggleProps = {
  extraSunClass?: string;
  extraMoonClass?: string;
  className?: string;
};

const ThemeToggle = ({
  className = "",
  extraSunClass = "",
  extraMoonClass = "",
}: ThemeToggleProps) => {
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
      ariaLabel='theme-toggle-button'
      className={`w-9 h-9 cursor-pointer ${className} ${extraClass}`}
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

export default ThemeToggle;
