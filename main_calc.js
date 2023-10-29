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
  } else if(result.value.slice(-1) === ".") {
    return;
  } else {
    result.value += data;
  }
}

function zero(elem) {
  const data = event.target.value;
  
  if(data === ".") {
    result.value += data;
  } else if(result.value.slice(0,1) === "1") {
    result.value += data;
  } else if(result.value.slice(0,1) === "2") {
    result.value += data;
  } else if(result.value.slice(0,1) === "3") {
    result.value += data;
  } else if(result.value.slice(0,1) === "4") {
    result.value += data;
  } else if(result.value.slice(0,1) === "5") {
    result.value += data;
  } else if(result.value.slice(0,1) === "6") {
    result.value += data;
  } else if(result.value.slice(0,1) === "7") {
    result.value += data;
  } else if(result.value.slice(0,1) === "8") {
    result.value += data;
  } else if(result.value.slice(0,1) === "9") {
    result.value += data;
  } else {
    result.value = data;
  }
}

function double_zero(elem) {
  const data = event.target.value;
  
  if(result.value === "") {
    return;
  } else if(result.value.slice(0,1) === "1") {
    result.value += data;
  } else if(result.value.slice(0,1) === "2") {
    result.value += data;
  } else if(result.value.slice(0,1) === "3") {
    result.value += data;
  } else if(result.value.slice(0,1) === "4") {
    result.value += data;
  } else if(result.value.slice(0,1) === "5") {
    result.value += data;
  } else if(result.value.slice(0,1) === "6") {
    result.value += data;
  } else if(result.value.slice(0,1) === "7") {
    result.value += data;
  } else if(result.value.slice(0,1) === "8") {
    result.value += data;
  } else if(result.value.slice(0,1) === "9") {
    result.value += data;
  } else {
    result.value = data;
  }
}

function reset() {
  result.value = "";
}

function enter() {
  if(result.value === "") {
    return;
  } else {
    result.value = new Function("return " + result.value)();
  }
}