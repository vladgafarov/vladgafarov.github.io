import { createClient, ClientConfig } from "@sanity/client";

if (
  !import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  !import.meta.env.PUBLIC_SANITY_DATASET
) {
  throw new Error("Did you forget to run sanity init --env?");
}

const config: ClientConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // date of setup
}

export const client = createClient(config);
