 // Definition for a Node.
 function Node(val,next,random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(head === null){
        return null;
    }
    copies = {}
    let _head = new Node(head.val,null, null)
    let _headRunner = _head
    let headRunner = head
    while (headRunner){
        copies[_headRunner.val] = _headRunner
        _headRunner.next = headRunner.next? new Node(headRunner.next.val,null,null) : null
        _headRunner = _headRunner.next
        headRunner = headRunner.next
    }
    headRunner = head
    _headRunner = _head
    while(headRunner){
        if (headRunner.random){
            let rVal = headRunner.random.val
            _headRunner.random = copies[rVal]
        }
        headRunner = headRunner.next
        _headRunner = _headRunner.next
    }
    return _head
   
    
};

var one = new Node(1,null,null)

var two = new Node(2,null,null)

var three =new  Node(3,null,null)

var four = new Node(4,null,null)
var five =new Node(5,null,null)
one.next =two
two.next = three
three.next = four
four.next = five
one.random = two
four.random= one
copyRandomList(one)