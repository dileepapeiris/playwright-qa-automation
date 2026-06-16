import { test, expect } from "@playwright/test";

test("app shows 2 todos by default", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("todo-item")).toHaveCount(2);
});

test("shows the default todo text", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("Buy milk")).toBeVisible();
  await expect(page.getByText("Go for a walk")).toBeVisible();
});

test("can add a new todo", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Type a todo...").fill("Learn Playwright");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.getByText("Learn Playwright")).toBeVisible();
  await expect(page.getByTestId("todo-count")).toHaveText("Total todos: 3");
});
