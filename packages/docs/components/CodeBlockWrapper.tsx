"use client";

import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

export const CodeBlockWrapper = ({ code }: { code: string }) => {
  return (
    <div className="mt-5">
      <CopyBlock
        text={code}
        language="javascript"
        showLineNumbers={false}
        theme={dracula}
        wrapLongLines
      />
    </div>
  );
};
