function palindrome(str) {
  // We're going this way, that way, forwards, and backwards all around the web wondering about palindromes 
  let palindrome_boolean = true; //hope for the best
  let new_str = str.replace(/[^1-9a-zA-Z]/g,"");//remove all non-alphanumeric characters (punctuation, spaces and symbols)

  new_str = new_str.toLowerCase();//turn everything into the same case

  let comparisons = new_str.length/2; //comparing the first half of characters with the second half requires 1 iteration for every 2 characters

  let front_characters = [];
  let back_characters = [];

  for(let i = 0; i < comparisons; i++){

    let front = new_str[i];
    front_characters.push(front);
    // document.getElementById("front").innerHTML = front;

    let back = new_str[new_str.length - 1 - i];
    back_characters.push(back);
    // console.log(back);
    // document.getElementById("back").innerHTML = back;

    if(front != back){
      palindrome_boolean = false;
    }
  }

  let read_forward;
  let read_backward;

  //if it is odd there will be a shared middle character that I remove using substring below.
  if(new_str.length % 2 == 0){
    console.log("even");
    read_forward = front_characters.join(" ") + " " + back_characters.reverse().join(" ");
    read_backward = back_characters.reverse().join(" ") + " " + front_characters.reverse().join(" ");
  }else{
    console.log("odd");
    read_forward = front_characters.join(" ") + " " + back_characters.reverse().join(" ").substr(1);
    read_backward = back_characters.reverse().join(" ") + " " + front_characters.reverse().join(" ").substr(1);
  }


  document.getElementById("front").innerHTML = read_forward;
  document.getElementById("back").innerHTML = read_backward;

  return palindrome_boolean;
}




document.getElementById("submit-button").addEventListener("click", function(){

  let str = document.getElementById("enter-palindrome").value;
  str = str.toLowerCase();
  str = str.replace(/[^1-9a-zA-Z]/g,"");
  let isPalindrome = palindrome(str);

  document.getElementById("word").innerHTML = `Is "${str}" a palindrome?`;
  if(palindrome(str)){
    document.getElementById("result").innerHTML = "True";
    document.getElementById("equal-icon").style = "display:block;"
    document.getElementById("not-equal-icon").style = "display:none;"
    document.getElementById("result").style="color:#2ecc71;"
  }else{
    document.getElementById("result").innerHTML = "False";
    document.getElementById("not-equal-icon").style = "display:block;"
    document.getElementById("equal-icon").style = "display:none;"
    document.getElementById("result").style="color:#EA2027;"
  }

  document.getElementById("forward-backward-display").style = "display:flex;";


})