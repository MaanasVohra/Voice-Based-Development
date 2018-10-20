const linkedListFn = require('linked-list');
const linkedList = linkedListFn();



const n = linkedList.node('new_node');
linkedList.addFirst('n1');
linkedList.traverse((n) => { console.log(n.getValue()); });