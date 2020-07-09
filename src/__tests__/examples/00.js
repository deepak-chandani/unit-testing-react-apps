/**
 * Examples: Common Matchers
 * https://jestjs.io/docs/en/using-matchers
 */

describe(" testing demo", () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });
})

/**
 There are many more matchers, check that https://jestjs.io/docs/en/expect
 - Setup & Teardown https://jestjs.io/docs/en/setup-teardown
 */
