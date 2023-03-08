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
    const charS = s[e];
    const charT = t[e];

    if (mapST.size != mapTS.size) return false;
    if (mapST.get(charS) != charT) return false
  }
  return true;
}


getCreateHashmap("paper", "title");