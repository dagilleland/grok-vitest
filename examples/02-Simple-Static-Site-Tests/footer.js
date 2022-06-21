export function footerDefault() {
    const content = document.createTextNode('@copy; 2022 by Dan Gilleland');
    let foot = document.querySelector('body > footer');
    if(foot === undefined || foot === null) {
        foot = document.createElement('footer');
        document.appendChild(foot);
        foot = document.querySelector('body > footer');
    }
    if(foot.childNodes.length === 0) {
        foot.appendChild(content);
    }
}