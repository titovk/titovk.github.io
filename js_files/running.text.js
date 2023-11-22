       var myTextArray = ["apples", "bananas", "oranges"];
       
       var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
         } 
         else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML ='<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 4; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = 800;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 1200;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };