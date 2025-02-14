import { cardImages } from './CardImages';

describe('CardImages', () => {
  it('should have the correct structure', () => {
    cardImages.forEach(image => {
      expect(image).toHaveProperty('src');
      expect(image).toHaveProperty('alt');
      expect(image).toHaveProperty('url');
      expect(image).toHaveProperty('badge');
      expect(image).toHaveProperty('parts');
      expect(image).toHaveProperty('data-testid');
    });
  });

  it('should have the correct number of images', () => {
    expect(cardImages.length).toBe(11);
  });

  it('should have unique data-testid values', () => {
    const testIds = cardImages.map(image => image['data-testid']);
    const uniqueTestIds = new Set(testIds);
    expect(uniqueTestIds.size).toBe(testIds.length);
  });

  it('should have valid URLs', () => {
    cardImages.forEach(image => {
      expect(image.url).toMatch(/^\/projects\/[a-zA-Z0-9_-]+$/);
    });
  });
});
