import React from "react";
import { MainLayout } from "./layouts/MainLayout";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  json,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { JobsPage } from "./pages/JobsPage";
import { NotFound } from "./pages/NotFound";
import { jobLoader, JobPage } from "./pages/JobPage";
import { AddJobPage } from "./pages/AddJobPage";
import { Job } from "./components/JobListing";
import { EditJobPage } from "./pages/EditJobPage";

const App = () => {
  const deleteJob = async (jobId: String) => {
    const deleteUrl = `/api/jobs/${jobId}`;
    const res = await fetch(deleteUrl, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return;
  };

  const addJob = async (job: Job) => {
    const res = await fetch("/api/jobs", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const updateJob = async (job: Job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJobFunction={addJob} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJob={updateJob} />}
          loader={jobLoader}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
