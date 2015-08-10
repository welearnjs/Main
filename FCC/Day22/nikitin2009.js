function pair(str) {
  
  var arr = str.split(''),
      newarr = [];
  
  for (var i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'A':
        newarr[i] = ['A', 'T'];
        break;
        
      case 'T':
        newarr[i] = ['T', 'A'];
        break;
        
      case 'C':
        newarr[i] = ['C', 'G'];
        break;
        
      case 'G':
        newarr[i] = ['G', 'C'];
        break;
    }
  }
  
  return newarr;
}
