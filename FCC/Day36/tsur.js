'use strict';

import {equal} from 'assert';

function add(n1, n2){

  const len = arguments.length;
  const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

  if(len > 1 && !(isNumber(n1) && isNumber(n2))) return;

  else if(len < 2 && !isNumber(n1)) return;

  else return len > 1 ? n1+n2 : n2 => isNumber(n2) ? n1+n2 : undefined; 
  
}

equal(add(1)(2), '3');
equal(add(1,2), '3');
equal(add(3)(), undefined);
equal(add(3, true), undefined);
