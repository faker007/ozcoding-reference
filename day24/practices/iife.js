var message;
// IIFE
(function () {
  var message = "나는야 내부 메시지";

  console.log(message);
})();

console.log(message);

message = "나는야 외부 메시지";
