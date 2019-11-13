function Trie(words){
    this.root = {}
    for(let w of words){
        let cur = this.root
        for(let c of w){
            if(!(c in cur)){
                cur[c] = {}
            }
            cur = cur[c]
        }
        cur['_'] = ""
    }
}
Trie.prototype.query = function(char, node=this.root){
    if(char in node){
        return node[char]
    }
    return null
}

var StreamChecker = function(words){
    this.trie = new Trie(words)
    this.wip = []
}
StreamChecker.prototype.query = function(letter){
    let result = false
    let newWip = []
    for(let w of this.wip){
        let t = this.trie.query(letter, w)
        if(t){
            if(!result && '_' in t){
                result = true
            }
            newWip.push(t)
        }
    }
    let t = this.trie.query(letter)
    if(t){
        newWip.push(t)
        if(!result && '_' in t){
            result = true
        }
    }
    this.wip = newWip
    return result
}
let r;
r = streamChecker = new StreamChecker(["cd","f","kl"]); 
r = streamChecker.query('a');          // return false
r = streamChecker.query('b');          // return false
r = streamChecker.query('c');          // return false
r = streamChecker.query('d');          // return true, because 'cd' is in the wordlist
r =streamChecker.query('e');          // return false
r =streamChecker.query('f');          // return true, because 'f' is in the wordlist
r =streamChecker.query('g');          // return false
r =streamChecker.query('h');          // return false
r =streamChecker.query('i');          // return false
r =streamChecker.query('j');          // return false
r =streamChecker.query('k');          // return false

