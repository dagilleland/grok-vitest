var main = document.querySelector('main');
if(main.querySelector('aside') == null) {
    // Add in something for the body
    main.innerHTML += '<aside>This paragraph is generated by JavaScript.</aside>';
}
