import { test, expect } from "@playwright/test";

test("page loads and shows Count: 0", async ({ page }) => {
  await page.goto("/");
  const display = page.getByTestId("count-display");
  await expect(display).toHaveText("Count: 0");
});

test("clicking Increase adds 1", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Increase" }).click();
  await expect(page.getByTestId("count-display")).toHaveText("Count: 1");
});

test("clicking Increase 3 times shows Count: 3", async ({ page }) => {
  await page.goto("/");
  const increaseBtn = page.getByRole("button", { name: "Increase" });
  await increaseBtn.click();
  await increaseBtn.click();
  await increaseBtn.click();
  await expect(page.getByTestId("count-display")).toHaveText("Count: 3");
});
