function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return getFirstSelector('#nested .target');
}
function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}
function deepestChild() {
  let current = document.getElementById('grand-node')
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }
  return current
}
