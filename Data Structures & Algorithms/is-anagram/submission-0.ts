class Solution {
   isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);
    const a = 'a'.charCodeAt(0); 

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - a]++;
        count[t.charCodeAt(i) - a]--;
    }
    return count.every((val) => val === 0);
}
}