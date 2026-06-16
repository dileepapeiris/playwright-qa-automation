import { test, expect } from "@playwright/test";

test("app shows 2 todos by default", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("todo-item")).toHaveCount(2);
});
