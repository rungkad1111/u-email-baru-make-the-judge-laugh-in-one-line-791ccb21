import { mkdirSync, writeFileSync } from "node:fs";

// Make the Judge Laugh in One Line
// One line, 110 characters: the inbox hits zero, and the victory
// lasts exactly one self-congratulatory email — the punchline
// lands at the end, with no setup left unexplained.
const line =
  "I finally cleaned my inbox to zero, then immediately emailed myself 'well done' so I'd have something to read.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
