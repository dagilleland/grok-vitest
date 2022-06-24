/**
 * @vitest-environment jsdom
 */
import { assert, beforeEach, describe, expect, it } from 'vitest'
import { footerDefault } from './footer.js'
it('should work', (ctx) => {
  // prints name of the test
  console.log(ctx.meta.name)
})


describe('footer content', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    })

    it('should generate footer content', () => {
        footerDefault();
        let actual = document.querySelector('footer');
        expect(actual).toBeDefined();
        expect(actual?.textContent).toBe('@copy; 2022 by Dan Gilleland');
    })

    it('should not replace existing footer content', () => {
        let existing = '<footer>Keep it simple</footer>';
        document.body.innerHTML += existing;
        footerDefault();
        let actual = document.querySelector('footer');
        expect(actual?.textContent).toBe('Keep it simple');
    })
})