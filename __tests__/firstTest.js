describe("Example test", () => {
  it("should navigate to Google", async () => {
    await page.goto("https://www.google.com");
    expect(await page.title()).toBe("Google");
  });
});
