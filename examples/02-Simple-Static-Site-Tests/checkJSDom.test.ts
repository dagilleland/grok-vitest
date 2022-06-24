/**
 * @vitest-environment jsdom
 */
import { assert, beforeEach, describe, expect, it } from 'vitest'

describe('footer content', () => {
    it('should have a document object by default because of the comment block at the top of this test file', () => {
        expect(document).toBeDefined();
    })

    it('should have a body element in JSdom', () => {
        let theBody = document.querySelector('body');
        expect(theBody).not.toBeNull();
    })

    it('should not have an content in the document body in JSdom', () => {
        let theBody = document.querySelector('body');
        expect(theBody?.childNodes.length).toBe(0);
    })

    it('should allow appending to the body element', () => {
        let theBody = document.querySelector('body');
        let aHeader = document.createElement('header');
        let lorem = document.createTextNode('Lorem Ipsum FTW');
        aHeader.appendChild(lorem);
        theBody?.appendChild(aHeader);
        let actual = document.querySelector('header');
        expect(actual).not.toBeNull();
        expect(actual?.textContent).not.toBeFalsy();
    })
})