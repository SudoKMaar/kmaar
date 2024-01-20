import { createClient } from "@sanity/client/stega";

import {
  apiVersion,
  dataset,
  projectId,
  revalidateSecret,
  studioUrl,
} from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: revalidateSecret ? false : true,
  stega: {
    studioUrl,
    // logger: console,
    filter: (props) => {
      if (props.sourcePath.at(-1) === "title") {
        return true;
      }

      return props.filterDefault(props);
    },
  },
});
