import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span>Daraja Kit</span>,
  project: {
    link: "https://github.com/amosmachora/daraja-kit",
  },
  docsRepositoryBase: "https://github.com/amosmachora/daraja-kit",
  footer: {
    content: "Daraja kit docs",
  },
  head: () => {
    const { title, frontMatter } = useConfig();
    const { asPath, defaultLocale, locale } = useRouter();
    const url =
      "https://daraja-kit.amosmachora.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <>
        <title>
          {title ? `${title} | Daraja Kit` : "Daraja Kit Documentation"}
        </title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Daraja Kit"} />
        <meta
          property="og:description"
          content={frontMatter.description || "Daraja Kit Documentation"}
        />
      </>
    );
  },
};

export default config;
