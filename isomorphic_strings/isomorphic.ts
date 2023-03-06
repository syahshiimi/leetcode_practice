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

  for (let e = 0; e <= s.length - 1; e++) {
    let c1 = s_hashmap.get(e);
    let c2 = t_hashmap.get(e);

    // console.log(c1, c2);

    // g => n cannot be mapped if
    // g exists in the same c1 map
    // and already not mapped to the same value of where it is meant to map
    //
    if (c1 != t_hashmap.get(e)) {
      console.log(c1, t_hashmap.get(e));
    }
  }
}

getCreateHashmap("egg", "pin");
