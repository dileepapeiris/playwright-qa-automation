import { defineConfig, devices } from "@playwright/test";

// process.env.CI is set to "true" automatically by GitHub Actions
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: "./tests",

  // How many times to retry a failed test?
  // Locally: 0 (fail fast so you can fix quickly)
  // CI: 2 (flaky network/timing issues can cause false failures)
  retries: isCI ? 2 : 0,

  // How many tests to run at the same time?
  workers: isCI ? 1 : undefined,

  // Report formats
  reporter: [
    ["list"],                          // Shows each test result in terminal
    ["html", { open: "never" }],       // Creates a nice HTML report
    ...(isCI ? [["github"] as ["github"]] : []),  // Adds annotations on GitHub PR
  ],

  use: {
    baseURL: "http://localhost:5173",

    // On failure: take a screenshot and record a video
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    // Trace is like a step-by-step recording — great for debugging CI failures
    trace: "on-first-retry",
  },

  // Start Vite before tests, stop it after
  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    reuseExistingServer: !isCI,        // In CI, always start fresh
  },

  // Which browsers to test?
  // The CI workflow picks ONE browser per job using --project flag
  // Locally, just run chromium to keep it fast
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox",  use: { ...devices["Desktop Firefox"] } },
    { name: "webkit",   use: { ...devices["Desktop Safari"] } },
  ],
});
