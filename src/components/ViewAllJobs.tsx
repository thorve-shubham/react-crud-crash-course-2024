import React from "react";

import jobs from "../jobs.json";
import { JobListing } from "./JobListing";
import { Link } from "react-router-dom";

export const ViewAllJobs = () => {
  console.log(jobs);
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        View All Jobs
      </Link>
    </section>
  );
};
