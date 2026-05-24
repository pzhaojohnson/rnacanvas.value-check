/**
 * @jest-environment jsdom
 */

import { isSVGGraphicsElement } from './isSVGGraphicsElement';

beforeAll(() => {
  // it's hard to properly test this in JSDOM
  globalThis.SVGGraphicsElement = SVGElement;
});

test('`function isSVGGraphicsElement()`', () => {
  var value = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  expect(isSVGGraphicsElement(value)).toBe(true);

  var value = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  expect(isSVGGraphicsElement(value)).toBe(true);

  var value = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  expect(isSVGGraphicsElement(value)).toBe(true);

  var value = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
  expect(isSVGGraphicsElement(value)).toBe(true);

  // an SVG element that's not an SVG graphics element
  var value = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  // should really be false (but JSDOM...)
  expect(isSVGGraphicsElement(value)).toBe(true);

  // an HTML element
  var value = document.createElement('div');
  expect(isSVGGraphicsElement(value)).toBe(false);

  // some random vales (that are not document elements)
  expect(isSVGGraphicsElement(1)).toBe(false);
  expect(isSVGGraphicsElement('asdf')).toBe(false);
  expect(isSVGGraphicsElement(true)).toBe(false);
  expect(isSVGGraphicsElement({})).toBe(false);
  expect(isSVGGraphicsElement(null)).toBe(false);
  expect(isSVGGraphicsElement(undefined)).toBe(false);
});
