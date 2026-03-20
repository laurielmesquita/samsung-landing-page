import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  projectId: "o1e9trbt",
  dataset: "production",
  schema,
  plugins: [structureTool()],
});
