/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0
    this.keyToVal = {}
    this.head = new ListNode(null)
    this.tail = new ListNode(null)
    this.head.next = this.tail
    this.tail.prev = this.head
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // return the value in the map at key
    let node = this.keyToVal[key]
    if(!node){
        return -1
    }
    // remove node from current place in list
    node.prev.next = node.next
    node.next.prev = node.prev
    // put element at start of linked list
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
    return node.val
    
    
};
LRUCache.prototype.setRecentlyUsed = function (node){
    if(node.next && node.prev){
        node.next.prev = node.prev;
        node.prev.next = node.next
    }
    node.prev = this.head;
    node.next = this.head.next
    this.head.next = node;
    node.next.prev = node;
}
LRUCache.prototype.removeNode = function(node){

}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(key in this.keyToVal){
       let node = this.keyToVal[key]
       node.val = value
        this.setRecentlyUsed(node)
        return
    }
    let node = new ListNode(key, value);
    this.setRecentlyUsed(node)
    
    if(this.count === this.capacity){
        toRemove = this.tail.prev
        delete this.keyToVal[toRemove.key]
        this.tail.prev = this.tail.prev.prev
        this.tail.prev.next = this.tail
        this.count--
    }
    this.keyToVal[key] = node
    this.count++
    
};
var ListNode = function(key, val){
    this.val = val
    this.key = key
    this.next = null
    this.prev = null
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var cache = new LRUCache(2)

cache.put(2, 1);
cache.put(1,1);
cache.put(2,3);
cache.put(4,1);
cache.get(1);       // returns 1
cache.get(2);    // evicts key 2