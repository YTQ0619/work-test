var hasCycle = (head) => {
  let cur1 = head;    
  let step1 = 0;      
  while (cur1) {
    step1++;
    let cur2 = head;  
    let step2 = 0;    
    while (cur2) {
      step2++;
      if (cur1 == cur2) {     
        if (step1 == step2) { 
          break;              
        } else {              
          return true;        
        }
      }
      cur2 = cur2.next;   
    }
    cur1 = cur1.next;     
  }
  return false;
};

