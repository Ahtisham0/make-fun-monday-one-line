// Monday, Reviewed in One Line — my own Monday, reviewed in one line.
// The program writes exactly one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My Monday: the alarm went off, the coffee filed for overtime, and a 9am standup recapped my whole weekend in one slide titled 'Quick Sync'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
