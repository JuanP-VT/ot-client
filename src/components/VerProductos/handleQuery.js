export default function handleQuery(setQuery) {
  const queryValue =
    document.querySelector("#productSelect").firstChild.textContent;
  setQuery(queryValue);
}
