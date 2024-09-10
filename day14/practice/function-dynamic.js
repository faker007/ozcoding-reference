const isAdult = (age) => age >= 20;
const checkAge = isAdult(20)
  ? function () {
      return "성인";
    }
  : function () {
      return "미성년자";
    };
console.log(checkAge());
