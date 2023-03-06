function getCreateHashmap(s, t) {
  if (s.length !== t.length) {
    return console.log("lengths are not the same");
  }

  console.log("lengths are the same... proceeding");

  // Instantiate new map
  const s_hashmap = new Map();
  const t_hashmap = new Map();

  // Iterate over s, t to add into each respective map values

  // iterating s and t ... via for... loop and adding into map

  for (let i = 0; i <= s.length - 1; i++) {
    s_hashmap.set(i, s[i]);
    t_hashmap.set(i, t[i]);
  }

  console.log("s_hashmap", s_hashmap);
  console.log("t_hashmap", t_hashmap);

  console.log("hashes are mapped...");

  for (let s_key of s_hashmap.keys()) {
    let combiKey = s_hashmap.get(s_key) + t_hashmap.get(s_key);
    if (s_hashmap.get(s_key) == t_hashmap.get(s_key)) {
      return false;
    } else {
      return true;
    }
  }
}

getCreateHashmap("egg", "pin");
