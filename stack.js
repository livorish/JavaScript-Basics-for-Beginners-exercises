let _count = new WeakMap();
let array = [];

class Stack {

   constructor(count) {
      _count.set(this, count = 0);
   }

   get count() {
      return _count.get(this);
   }
   set count(val = 0) {
      return _count.set(this, val);
   }
   peek() {
      if (this.count <= 0) throw new Error('Stack is empty.');
      return array[array.length - 1];
   }

   pop() {
      if (this.count <= 0) throw new Error('Stack is empty.');
      let delItem = array.pop();
      this.count -= 1;
      return delItem;
   }

   push(item) {
      array.push(item);
      this.count += 1;
   }

}
