function Stopwatch() {
   let duration = 0;
   let startTime, endTime, running;

   this.start = function () {
      if (running) {
         throw new Error('Stopwatch has already started.');
      }
      running = true;
      startTime = new Date();

      //duration = startTime;
   };

   this.stop = function () {
      if (!running) {
         throw new Error('Stopwatch has already stopped.');
      }
      running = false;
      endTime = new Date();

      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;

   };

   this.reset = function () {
      startTime = null;
      endTime = null;
      running = false;
      duration = 0;
   };


   Object.defineProperty(this, 'duration', {
      get: function () {
         return duration;
      }
   });

}
