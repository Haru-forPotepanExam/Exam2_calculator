let result = document.getElementById("result");

function num(elem) {
  const data = event.target.value;
  //console.log(data);
  
  if(result.value === "") {
    result.value = data;
  } else {
    result.value += data;
  }
}

function edit(elem) {
  const data = event.target.value;
  
  if(result.value === "") {
    return;
  }else if(result.value.slice(-1) === "+") {
    return;
  } else if(result.value.slice(-1) === "-") {
    return;
  } else if(result.value.slice(-1) === "*") {
    return;
  } else if(result.value.slice(-1) === "/") {
    return;
  } else {
    result.value += data;
  }
}

function zero(elem) {
  const data = event.target.value;
  
  if(result.value === "") {
    return;
  } else {
    result.value += data;
  }
}

function reset() {
  result.value = "";
}

function enter() {
  result.value = new Function("return " + result.value)();
}