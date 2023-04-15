export type ResultObj = MetadataObj & {
  path: string;
  numCharacters: number;
  image?: string;
};

export type MetadataObj = {
  title: string;
  description: string;
};

export function isMetadata(obj: unknown): obj is MetadataObj {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "title" in obj &&
    "description" in obj
  );
}
