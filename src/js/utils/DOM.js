export function removeClass(selector,className)
{
    let elements = document.querySelectorAll(selector);
    for (let elem of elements)
        elem.classList.remove(className)
}