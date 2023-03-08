function getCreateHashmap(s, t) {
  if (s.length !== t.length) {
    return console.log("lengths are not the same");
  }

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i <= s.length - 1; i++) {
    mapST.set(s[i], t[i]);
    mapTS.set(t[i], s[i]);
  }


  const mapST_entries = mapST.entries()
  const mapTS_entries = mapTS.entries()


  if (mapST.size !== mapTS.size) {
    return console.log('is not isomorphic');
  }

  for (let e = 0; e <= s.length - 1; e++) {
    // check if they are the SAME strings
    if (s[e] === t[e]) {
      console.log('is isomorphic')
      return false
    } else if (!(mapST.has(t[e])) || (!(mapTS.has(s[e])))) {
      console.log('is isommorphic')
      return true
    }
  }
}


getCreateHashmap("paper", "title");