const isSameTree = (p, q) => {
    
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    }
    
    const left = isSameTree(p.left, q.left);    
    const right = isSameTree(p.right, q.right);
    
    return p.val === q.val && left && right;
}

module.exports = isSameTree;