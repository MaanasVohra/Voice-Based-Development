let stats = {
    buttonCount: 0,
    contentCount: 0,
    imageCount: 0,
    listCount: 0,
    listItemCount: 0,
    textCount: 0,
    viewCount: 0
}

class Node {
    constructor(nodeType, nodeId) {
        this.nodeInnerContent = [];
        this.nodeType = nodeType;
        this.nodeId = nodeId;
    }

}

class InnerNode {
    constructor() {
        if(arguments.length === 3) {
            this.innerNodeType = arguments[0];
            this.innerNodeId = arguments[1];
            this.externalPointingNode = arguments[2];
        } else if (arguments.length === 2) {
            this.innerNodeType = arguments[0];
            this.innerNodeId = arguments[1];
        }
    }

}

function dfs(parentLevelNode) {
    let nodeType = parentLevelNode.nodeType;
    let nodeId = parentLevelNode.nodeId;
    console.log(nodeType + " " + nodeId);

    for(let i = 0; i < parentLevelNode.nodeInnerContent.length; i++) {
        if(parentLevelNode.nodeInnerContent[i].externalPointingNode) {
            dfs(parentLevelNode.nodeInnerContent[i].externalPointingNode);
        } else {
            const element = parentLevelNode.nodeInnerContent[i];
            console.log(element.innerNodeType + " " + element.innerNodeId);
        }
    }
}


let parentLevelNode = new Node('view', 0);
let rootNode = new InnerNode('root', -1, parentLevelNode);

// shift to level 1 node
let currentNode = rootNode;
currentNode = currentNode.externalPointingNode;

// construct level 1 node 
stats.viewCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('view', stats.viewCount, new Node('view', stats.viewCount)));
stats.viewCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('view', stats.viewCount, new Node('view', stats.viewCount)));
stats.viewCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('view', stats.viewCount, new Node('view', stats.viewCount)));

stats.buttonCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('button', stats.buttonCount));

stats.textCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('text', stats.textCount, new Node('text', stats.textCount)));
stats.textCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('text', stats.textCount, new Node('text', stats.textCount)));

stats.contentCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('content', stats.contentCount, new Node('content', stats.contentCount)));

// 3rd level
currentNode = currentNode.nodeInnerContent[0].externalPointingNode;

stats.viewCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('view', stats.viewCount, new Node('view', stats.viewCount)));
stats.viewCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('view', stats.viewCount, new Node('view', stats.viewCount)));

dfs(parentLevelNode);