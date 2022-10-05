export default function handleQuery(setQuery, setUpdate){
    setUpdate((state)=> state +1)
    const queryValue = document.querySelector('#editProductCategoria').firstChild.textContent
    setQuery(queryValue)
    setUpdate((state)=> state +1)
}