import React from "react";
import Prism from "./prismjs";
import { Text as SlateText } from "slate";

const usePrism = () => {
  const [language, setLanguage] = React.useState<string | number>("js");

  const getLength = (token) => {
    if (typeof token === "string") {
      return token.length;
    } else if (typeof token.content === "string") {
      return token.content.length;
    } else {
      return token.content.reduce((l, t) => l + getLength(t), 0);
    }
  };

  // decorate function depends on the language selected
  const decorate = React.useCallback(
    ([node, path]) => {
      const ranges = [];
      if (!SlateText.isText(node)) {
        return ranges;
      }
      const tokens = Prism.tokenize(node.text, Prism.languages[language]);
      let start = 0;

      for (const token of tokens) {
        const length = getLength(token);
        const end = start + length;

        if (typeof token !== "string") {
          ranges.push({
            [token.type]: true,
            anchor: { path, offset: start },
            focus: { path, offset: end },
          });
        }

        start = end;
      }

      return ranges;
    },
    [language]
  );

  return { decorate, language, setLanguage };
}; // end of usePrism

export default usePrism;
