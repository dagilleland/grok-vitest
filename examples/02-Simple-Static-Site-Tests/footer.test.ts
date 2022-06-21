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
        
    })

    it('should have a document object by default because of the comment block at the top of this test file', () => {
        expect(document).toBeDefined();
    })

    it('should be able to create a body element', () => {
        // let body = document.createElement('body')
        // expect(body).toBeDefined();
        let created = document.querySelector('body');
        expect(created).toBeDefined();
        expect(created?.childNodes.length).toBe(0);
    })

    it('should generate footer content', () => {
        let body = document.createElement('body')
        expect(body).toBeDefined();
        document.appendChild(body);
        footerDefault();
        expect(document.querySelector('footer')).toBeDefined();
    })
})