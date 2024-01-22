import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";
// import { createClient } from "next-sanity";

import {
  apiVersion,
  dataset,
  projectId,
  token,
  revalidateSecret,
} from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: revalidateSecret ? false : true,
  token,
});

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    // disable cache when hook secret is undefined for development only.
    cache: revalidateSecret ? "force-cache" : "no-cache",
    next: { tags },
  });
}
