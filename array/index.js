function processArray(...str) {
    console.log(str);
    //   console.log("Array practice print num 1 to 10", str);
    //   var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //   console.log(numbers);
    //   document.getElementById("placeholder").innerHTML = numbers;
    //   for (let index = 0; index < numbers.length; index++) {
    //     const element = numbers[index];
    //     console.log(element);
    //   }
    const names = ["Punam", "Sunil", "Snehal", "Pranav", "Prerana"];
    names.forEach((name, index) => {
      // console.log("Element - ", name, " Index", index);
      // console.log("------ name.startsWith('Pr') ---", name.startsWith("Pr"));
      // console.log("------ name.endsWith('l') ---- ", name.endsWith("l"));
      // console.log("------ name.includes('u') ---- ", name.includes("u"));
    });
    const indexOfSunil = names.indexOf("Sunil");
    //   console.log("Index of Sunil is - ", indexOfSunil);
    //
    const match = names.find((name, index) => {
      const starts = name.startsWith("S");
      const ends = name.endsWith("l");
      return starts && ends;
    });
    //   console.log("Match = ", match);
    const matchAll = names.filter((name, index) => {
      const starts = name.startsWith("S");
      const ends = name.endsWith("l");
      return starts && ends;
    });
    //   console.log("Match All = ", matchAll);
  }
  processArray("ABC");
  processArray("ABC", "PQR");
  processArray("ABC", "PQR", "XYZ");
  processArray("ABC", "PQR", "XYZ", "12312312sda");

