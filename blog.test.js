"use strict";

const puppeteer = require("puppeteer");

let page;
let browser;
const webpage = "https://github.com/GoogleChrome/puppeteer";
const width = 1440;
const height = 900;
const myBlog = "blog.png"

describe("Scrape the Puppeteer github repository", () => {

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });

  afterAll(async () => {
    await page.screenshot({path: myBlog});
    browser.close();
  });

  it("Should have a list of uls for features in Puppeteer", async () => {
    await page.goto(webpage);
    const textContent = await page.evaluate(() => document.querySelector('.markdown-body.entry-content blockquote p').textContent);
    expect(textContent).toEqual("Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.");
  });
});