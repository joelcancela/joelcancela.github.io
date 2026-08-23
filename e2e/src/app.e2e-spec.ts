import { expect, test } from '@playwright/test';

test('home page displays the navbar brand without runtime errors', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('/');
  await expect(page.locator('ngjc-root .navbar-brand')).toHaveText('Joël Cancela Vaz');
  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});

test('portfolio filters and contact button retain their styles', async ({ page }) => {
  await page.goto('/');

  const activeFilter = page.locator('.portfolio-sorting button').first();
  await expect(activeFilter).toHaveCSS('text-transform', 'uppercase');
  await expect(page.locator('.btn-info').first()).toHaveCSS('color', 'rgb(255, 255, 255)');
});

test('project carousel advances to the next slide', async ({ page }) => {
  await page.goto('/');
  const project = page.locator('ngjc-portfolio-item').filter({ hasText: 'BlablaMove' });
  await project.click();

  const carousel = page.locator('.modal .carousel');
  const activeSlide = carousel.locator('.carousel-item.active img');
  const indicators = carousel.locator('.carousel-indicators button');

  await expect(activeSlide).toHaveAttribute('alt', 'Public status front-end');
  await expect(indicators).toHaveCount(5);
  await expect(indicators.first()).toHaveText('');
  await page.waitForTimeout(1300);
  await expect(activeSlide).toHaveAttribute('alt', 'Public status front-end');

  await carousel.locator('[data-bs-slide="next"]').click();
  await expect(activeSlide).toHaveAttribute('alt', 'Admin dashboard');
});
