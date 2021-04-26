import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import {
  TextField,
  MenuItem,
  Link,
  FormControl,
  Select,
} from "@material-ui/core/";

import TranslateIcon from "@material-ui/icons/Translate";

interface Props {}

const LanguageSwitch = (props: Props) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const [selected, setSelected] = useState("");

  const languageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelected(event.target.value as string);
  };

  return (
    <div>
      <TranslateIcon />

      <div
        onClick={() => {
          router.push("", "", { locale: "ko" });
        }}
      >
        {t("Korean")}
      </div>
      <div
        onClick={() => {
          router.push("", "", { locale: "en" });
        }}
      >
        {t("English")}
      </div>
      {/* <FormControl>
        <Select value={selected} onChange={languageChange}>
          <MenuItem
            value="ko"
            onClick={() => {
              router.push("/", "/", { locale: "ko" });
            }}
          >
            {t("Korean")}
          </MenuItem>
          ;
          <MenuItem
            value="en"
            onClick={() => {
              router.push("/", "/", { locale: "en" });
            }}
          >
            {t("English")}
          </MenuItem>
          ;
        </Select>
      </FormControl> */}
    </div>
  );
};

export default LanguageSwitch;
