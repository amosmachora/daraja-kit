"use client";

import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export const NextPage = ({
  prevHref,
  nextHref,
}: {
  prevHref?: string;
  nextHref?: string;
}) => {
  return (
    <div className="flex gap-x-5">
      {prevHref && (
        <Link
          href={`${prevHref}`}
          className="mt-5 border rounded-md hover:border-myPurple p-5 w-1/2 mr-auto flex flex-col items-start"
        >
          <p className="text-gray-500 ">Prev</p>
          <div className="flex gap-x-2 items-center text-myPurple font-semibold text-sm">
            <FontAwesomeIcon icon={faAnglesLeft} className="h-3 w-3" />
            {prevHref}
          </div>
        </Link>
      )}
      {nextHref && (
        <Link
          href={`${nextHref}`}
          className="mt-5 border rounded-md hover:border-myPurple p-5 w-1/2 ml-auto flex flex-col items-end"
        >
          <p className="text-gray-500">Next</p>
          <div className="flex gap-x-2 items-center text-myPurple font-semibold text-sm">
            {nextHref}
            <FontAwesomeIcon icon={faAnglesRight} className="h-3 w-3" />
          </div>
        </Link>
      )}
    </div>
  );
};
