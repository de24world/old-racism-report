import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { TextField, MenuItem, Link } from "@material-ui/core/";

import TranslateIcon from "@material-ui/icons/Translate";

interface Props {}

const LanguageSwitch = (props: Props) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const languages = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "ko",
      label: "Korean",
    },
  ];

  const [language, setLanguage] = useState();

  const languageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <TranslateIcon />
      <div
        onClick={() => {
          router.push("/", "/", { locale: "ko" });
        }}
      >
        to /ko/
      </div>
      <div
        onClick={() => {
          router.push("/", "/", { locale: "en" });
        }}
      >
        to /en/
      </div>

      {/* <Link href="" locale="en">
        <button>{t("English")}</button>
      </Link>
      <Link href="" locale="ko">
        <button>{t("Korean")}</button>
      </Link> */}

      {/* <TextField
        select
        label="Select"
        className="languageField"
        value={language}
        onChange={languageChange}
      >
        {languages.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <Link href="" locale={option.value}>
              {option.label}
            </Link>
          </MenuItem>
        ))}
      </TextField> */}
    </div>
  );
};

export default LanguageSwitch;
