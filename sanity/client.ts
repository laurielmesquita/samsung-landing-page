import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "o1e9trbt",
  dataset: "production",
  apiVersion: "2024-03-20",
  useCdn: false, // Recomendado false para e-commerce (dados sempre super atualizados s/ cache)
});
