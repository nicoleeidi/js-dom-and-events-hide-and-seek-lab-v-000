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
  }
    return array
}
function deepestChild(n){

}
function deepestChild(){

  var grandnode= document.getElementById('grand-node')
  var alldescendents= grandnode.querySelectorAll('*')
  //let current=
  //let next=[]
  for (let i=0;i<alldescendents.length;i++){
    if (alldescendents[i].childElementCount===0){
      return grandnode.querySelectorAll('*')[i]
      //doesnt work because even [3].hasChildNodes= true!
      //but cant do [4] because only goes up to 3!
    }

  }
  //document.querySelector('#grand-node div div div div')

}
