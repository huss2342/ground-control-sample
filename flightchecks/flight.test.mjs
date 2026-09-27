import assert from "node:assert/strict";
import { test } from "node:test";
import { runPlan } from "./runner.mjs";

const plan = {"claims":[{"id":"c_12a561884e","kind":"file_exists","occurrences":[{"location":{"endOffset":598,"kind":"file","lineEnd":23,"lineStart":23,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":579},"quote":"config/default.json"}],"params":{"path":"config/default.json"},"sourceId":"readme_780dfc0fc54d","tier":"static"},{"id":"c_17e8105bde","kind":"file_exists","occurrences":[{"location":{"endOffset":789,"kind":"file","lineEnd":39,"lineStart":39,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":777},"quote":"src/notes.js"}],"params":{"path":"src/notes.js"},"sourceId":"readme_780dfc0fc54d","tier":"static"},{"id":"c_5ae2b72325","kind":"script_exists","occurrences":[{"location":{"endOffset":422,"kind":"file","lineEnd":17,"lineStart":15,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":411},"quote":"npm run dev"}],"params":{"script":"dev"},"sourceId":"readme_780dfc0fc54d","tier":"static"},{"id":"c_8f07bd4a6c","kind":"version","occurrences":[{"location":{"endOffset":324,"kind":"file","lineEnd":9,"lineStart":9,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":305},"quote":"Node.js 20 or later"}],"params":{"range":">=20"},"sourceId":"readme_780dfc0fc54d","tier":"static"},{"id":"c_8f7db7c445","kind":"file_exists","occurrences":[{"location":{"endOffset":466,"kind":"file","lineEnd":19,"lineStart":19,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":451},"quote":"`src/server.js`"}],"params":{"path":"src/server.js"},"sourceId":"readme_780dfc0fc54d","tier":"static"},{"id":"c_b302fed63c","kind":"command_succeeds","occurrences":[{"location":{"endOffset":684,"kind":"file","lineEnd":31,"lineStart":29,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":672},"quote":"npm run seed"}],"params":{"command":"npm run seed"},"sourceId":"readme_780dfc0fc54d","tier":"runtime"},{"id":"c_b4c7d64a65","kind":"script_exists","occurrences":[{"location":{"endOffset":663,"kind":"file","lineEnd":27,"lineStart":27,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":652},"quote":"seed script"}],"params":{"script":"seed"},"sourceId":"readme_780dfc0fc54d","tier":"static"},{"id":"c_bcc78e019d","kind":"command_succeeds","occurrences":[{"location":{"endOffset":817,"kind":"file","lineEnd":45,"lineStart":43,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":809},"quote":"npm test"}],"params":{"command":"npm test"},"sourceId":"readme_780dfc0fc54d","tier":"runtime"},{"id":"c_c2c8bc6400","kind":"file_exists","occurrences":[{"location":{"endOffset":365,"kind":"file","lineEnd":13,"lineStart":13,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":351},"quote":"`.env.example`"}],"params":{"path":".env.example"},"sourceId":"readme_780dfc0fc54d","tier":"static"},{"id":"c_de881ea4ab","kind":"file_exists","occurrences":[{"location":{"endOffset":856,"kind":"file","lineEnd":47,"lineStart":47,"path":"README.md","sourceId":"readme_780dfc0fc54d","startOffset":838},"quote":"test/notes.test.js"}],"params":{"path":"test/notes.test.js"},"sourceId":"readme_780dfc0fc54d","tier":"static"}],"repo":"huss2342/ground-control-sample","sourceHashes":{"readme_780dfc0fc54d":"7fc0d3329a1ebdbd2153a68628bd2285701a24dc252ddb0d31df4f5e1033fb9b"}};
const results = await runPlan(plan);
const byIndex = plan.claims.map((claim) => results[claim.id]);

test("README.md:23  config/default.json", { skip: byIndex[0]?.status === "unverified" || byIndex[0]?.status === "skipped" }, () => {
  const result = byIndex[0];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:39  src/notes.js", { skip: byIndex[1]?.status === "unverified" || byIndex[1]?.status === "skipped" }, () => {
  const result = byIndex[1];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:15  npm run dev", { skip: byIndex[2]?.status === "unverified" || byIndex[2]?.status === "skipped" }, () => {
  const result = byIndex[2];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:9  Node.js 20 or later", { skip: byIndex[3]?.status === "unverified" || byIndex[3]?.status === "skipped" }, () => {
  const result = byIndex[3];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:19  `src/server.js`", { skip: byIndex[4]?.status === "unverified" || byIndex[4]?.status === "skipped" }, () => {
  const result = byIndex[4];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:29  npm run seed", { skip: byIndex[5]?.status === "unverified" || byIndex[5]?.status === "skipped" }, () => {
  const result = byIndex[5];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:27  seed script", { skip: byIndex[6]?.status === "unverified" || byIndex[6]?.status === "skipped" }, () => {
  const result = byIndex[6];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:43  npm test", { skip: byIndex[7]?.status === "unverified" || byIndex[7]?.status === "skipped" }, () => {
  const result = byIndex[7];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:13  `.env.example`", { skip: byIndex[8]?.status === "unverified" || byIndex[8]?.status === "skipped" }, () => {
  const result = byIndex[8];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

test("README.md:47  test/notes.test.js", { skip: byIndex[9]?.status === "unverified" || byIndex[9]?.status === "skipped" }, () => {
  const result = byIndex[9];
  assert.ok(result, "Runner returned no result");
  assert.ok(result.status === "pass" || result.status === "flaky", [result.expected, result.actual].join("\n"));
});

