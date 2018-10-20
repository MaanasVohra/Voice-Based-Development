class Stats {
    constructor() {
        this.buttonCount = 0;
        this.contentCount = 0;
        this.imageCount = 0;
        this.listCount = 0;
        this.listItemCount = 0;
        this.textCount = 0;
        this.viewCount = 0;
    }

    getButtonCount() { return this.buttonCount; }
    getContentCount() { return this.contentCount; }
    getImageCount() { return this.imageCount; }
    getListCount() { return this.listCount; }
    getListItemCount() { return this.listItemCount; }
    getTextCount() { return this.textCount; }
    getViewCount() { return this.viewCount; }

    addToButtonCount() { this.buttonCount += 1; }
    addToContentCount() { this.contentCount += 1; }
    addToImageCount() { this.imageCount += 1; }
    addToListCount() { this.listCount += 1; }
    addToListItemCount() { this.listItemCount += 1; }
    addToTextCount() { this.textCount += 1; }
    addToViewCount() { this.viewCount += 1; }

}

class Node {
    constructor(nodeType, nodeId) {
        this.nodeInnerContent = [];
        this.nodeType = nodeType;
        this.nodeId = nodeId;
    }

    addInnerNode(nodeType, nodeName, stats) {
        let newInnerNode;
        switch (nodeType) {
            case 'view':
                stats.addToViewCount();
                if (nodeName) {
                    newInnerNode = new InnerNode('view', nodeName, new Node('view', nodeName));
                } else {
                    newInnerNode = new InnerNode('view', stats.getViewCount(), new Node('view', stats.getViewCount()));
                }
                this.nodeInnerContent.push(newInnerNode);
                break;

            case 'content' :
                stats.addToContentCount();
                newInnerNode = new InnerNode('content', stats.getContentCount());
                newInnerNode.contentValue = nodeName;
                this.nodeInnerContent.push(newInnerNode);
                break;

            default:
        }
    }

    dfs(nodeContent) {

        console.log(this.nodeType + " " + this.nodeId + "Hello"); 
        let nodeType = this.nodeType;

        let openingTag, closingTag;
        switch (nodeType) {
            case 'view':
                openingTag = '<ViewComponent>';
                break;

            case 'text':
                openingTag = '<TextComponent>';
                break;

            default:
            // console.log("Default");
        }
        nodeContent += openingTag;

        for (let i = 0; i < this.nodeInnerContent.length; i++) {
            if (this.nodeInnerContent[i].externalPointingNode) {
                nodeContent = this.nodeInnerContent[i].externalPointingNode.dfs(nodeContent);
            } else {
                const element = this.nodeInnerContent[i];
                if (element.innerNodeType === 'button') {
                    nodeContent += '<Button></Button>';
                } else if (element.innerNodeType === 'image') {
                    nodeContent += '<Image></Image>';
                } else if (element.innerNodeType === 'content') {
                    if(element.contentValue) {
                        nodeContent += '<Content inputContent={' + element.contentValue + '}></Content>';
                    } else {
                        nodeContent += '<Content></Content>';
                    }
                }
                console.log(element.innerNodeType + " " + element.innerNodeId);
            }
        }

        switch (nodeType) {
            case 'view':
                closingTag = '</ViewComponent>';
                break;

            case 'text':
                closingTag = '</TextComponent>';
                break;

            default:
            // console.log("default");
        }

        nodeContent += closingTag;
        return nodeContent;
    }
}

class InnerNode {
    constructor() {
        if (arguments.length === 3) {
            this.innerNodeType = arguments[0];
            this.innerNodeId = arguments[1];
            this.externalPointingNode = arguments[2];
        } else if (arguments.length === 2) {
            this.innerNodeType = arguments[0];
            this.innerNodeId = arguments[1];
        }
    }

}

let parentLevelNode = new Node('view', 0);
let stats = new Stats();

// shift to level 1 node
let currentNode = parentLevelNode;

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
currentNode.nodeInnerContent.push(new InnerNode('content', stats.contentCount));

// 3rd level
currentNode = currentNode.nodeInnerContent[0].externalPointingNode;

stats.viewCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('view', stats.viewCount, new Node('view', stats.viewCount)));
stats.viewCount += 1;
currentNode.nodeInnerContent.push(new InnerNode('view', stats.viewCount, new Node('view', stats.viewCount)));

// module.exports = { parentLevelNode: parentLevelNode, currentElements: nodeContent.__html };
module.exports = { parentLevelNode: parentLevelNode, stats: stats };
// console.log(parentLevelNode.dfs(""));