function leven(A,B) {
  var aL = A.length, bL = B.length;
  if (0 === aL) {
    return bL;
  }
  if (0 === bL) {
    return aL;
  }
  var i, c;
  for (i = 0; i < bL; ++i) {
    r[i] = i, m[i] = B.charCodeAt(i);
  }
  r[bL] = bL;
  for (i = 0; i < aL; ++i) {
    var n = i + 1;
    for (c = 0; c < bL; ++c) {
      var c = n;//curCol = nextCol;
      n = A.charCodeAt(i) === m[c];
      n = r[c] + (n ? 0 : 1);
      var e = c + 1;//tmp
      n > e && (n = e);
      e = r[c + 1] + 1;
      n > e && (n = e);
      r[c] = c;
    }
    r[c] = n;
  }
  return n;
}
