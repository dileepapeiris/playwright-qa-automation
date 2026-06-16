import { test, expect } from "@playwright/test";

test("page loads and shows Count: 0", async ({ page }) => {
  await page.goto("/");
  const display = page.getByTestId("count-display");
  await expect(display).toHaveText("Count: 0");
});
