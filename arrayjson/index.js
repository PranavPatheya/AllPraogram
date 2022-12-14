var Userprofile =
[
    {
    userProfile1:"Pranav", age: 23, PIO : 1234567890, Compay:"Patheya",
    },
    {
        userProfile2:"Dhiraj", age: 21, PIO : 12345645621, Company:"Atos",
    },
    {
        userProfile3:"sanket", age: 24, PIO : 12345356321, Company:"production Ind",
    },
    {
        userProfile4:"Pritam", age: 20, PIO : 12456654321, Company:"Class",
    },
    {
        userProfile5:"Omkar", age: 26, PIO : 1237574321, Company:"Freelancer",
    },
];

var Sorteddata = Userprofile.sort((a, b) => {
    if (a.age< b.age) {
      return -1;
    }
    return 0;
  });
  console.log("Sorted  ",Sorteddata)