export type ResultObj = MetadataObj & {
  path: string;
  numCharacters: number;
  image?: string;
};

export function isResultObj(obj: unknown): obj is ResultObj {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "path" in obj &&
    "numCharacters" in obj &&
    isMetadata(obj)
  );
}

export type MetadataObj = {
  title: string;
  description: string;
  isCdnHosted: boolean;
};

export function isMetadata(obj: unknown): obj is MetadataObj {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "title" in obj &&
    "description" in obj &&
    "isCdnHosted" in obj
  );
}
