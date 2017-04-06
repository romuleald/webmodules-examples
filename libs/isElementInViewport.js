/**
 * @param elem {HTMLImageElement}
 * @param itemTouchViewport {Boolean}
 * @return {boolean}
 */
let isElementInViewport = function (elem, itemTouchViewport = true) {
    let rect = elem.getBoundingClientRect();
    let elemHeight = 0;
    if (itemTouchViewport) {
        elemHeight = elem.clientHeight;
    }
    return (
        rect.top + elemHeight >= 0 &&
        rect.left >= 0 &&
        rect.bottom - elemHeight <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
};

module.exports = isElementInViewport;