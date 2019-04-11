function Test(wordd){
  word = wordd.toLowerCase();
var j = 0;
var k = word.length -1;
while((word[j] == word[k]) == true){
  if(j == k || j>k){
    console.log("isPalindrome");
    break;
  }
  j++;
  k--;
}
}
Test("noon");