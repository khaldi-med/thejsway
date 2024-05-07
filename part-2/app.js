const showChild = (node, index) => {
  if(node !== document.body){
    console.log("Wrong node type");
  }
  else if (index <= node.length){
    node.childNodes[index];
  }
  else{
    console.error("Incorrect index");
  }
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
