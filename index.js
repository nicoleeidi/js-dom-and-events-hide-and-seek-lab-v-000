function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
return document.querySelector('#nested div div div.target')
}
function increaseRankBy(n){ //need return in JS
  let array= document.querySelectorAll('.ranked-list li')
  for (let i=0; i < array.length; i++){
    string= array[i].innerHTML
    array[i].innerHTML= parseInt(string,10) + n
    return array
  }
}
function deepestChild(n){

}
