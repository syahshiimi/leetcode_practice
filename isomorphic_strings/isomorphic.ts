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

  //   for (let e = 0; e <= s.length - 1; e++) {
  //     let c1 = s_hashmap.get(e);
  //     let c2 = t_hashmap.get(e);

  // console.log(c1, c2);

  // egg to act
  // c1 / c2
  // e => a can be mapped
  // g => c can be mapped
  // g => n cannot be mapped because
  // another g exists in the same c1 map
  // and its adjacent c2 value is not the same
  // as the previous c2 value
  //

  const s1entry = s_hashmap.entries();
  const t1entry = t_hashmap.entries();

  const s1value = s_hashmap.values();
  const t1value = t_hashmap.values();

  // for (let e = 0; e <= s.length - 1; e++) {
  //   const s1entryChar = s1entry.next().value;
  //   const t1entryChar = t1entry.next().value;
  //   console.log(s1entryChar[1]);
  //   console.log(t1entryChar[1]);
  // }

  for (let s_entry of s_hashmap.entries()) {
    const c1nextITer = s1entry.next().value;
    const c2nextITer = t1entry.next().value;
    // console.log(c1nextITer[1], c2nextITer[1], s_entry[1], c2nextITer[1]);
    console.log(t1value.next().value);

    if (c1nextITer[1] === s_entry[1] && c2nextITer[1] != t1value.next().value) {
      return false;
    } else {
      return console.log(true);
    }
  }
}

getCreateHashmap("egg", "pin");
