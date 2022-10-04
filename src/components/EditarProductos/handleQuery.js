export default function handleQuery(setQuery){
    const queryValue = document.querySelector('#editProductCategoria').firstChild.textContent
    setQuery(queryValue)
}