function HtmlElement() {

   this.click = function () {
      console.log('clicked');
   }

}

HtmlElement.prototype.focus = function () {
   console.log('focused');
}

function HtmlSelectElement(items) {
   this.items = items;
   this.items = new Array();

   this.addItem = function (item) {
      this.items.push(item);
   }

   this.removeItem = function (item) {
      if (this.items.indexOf(item) !== -1) {
         this.items.splice((this.items.indexOf(item)), 1);
      }
   }

   this.render = function () {
      let message = '<select>\n';
      for (item in items) {
         message += `\t<option> ${item} </option>\n`;
      }
      message += '</select>';
      return message;
   }

}

HtmlSelectElement.prototype = new HtmlElement();

function HtmlImageElement(src) {

   this.src = src;

   this.render = function () {
      let message = `<img src="${this.src}" /`;
      return message;
   }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
   new HtmlSelectElement([1, 2, 3]),
   new HtmlImageElement('html://')
];

for (let element of elements)
   console.log(element.render());
