const Data = [
  {
    subjectNaem: "Data Structures",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
  {
    subjectNaem: "Probability & Statistics",
    subjectCode: "BPS-288",
    roomNo: 202,
  },
  {
    subjectNaem: "Digital Electronics",
    subjectCode: "TIT -238",
    roomNo: 202,
  },
  {
    subjectNaem: "Foundations of Information Technology",
    subjectCode: "TIT -236",
    roomNo: 202,
  },
  {
    subjectNaem: "English",
    subjectCode: "TIT -234",
    roomNo: 202,
  },
  {
    subjectNaem: "Formal Language ",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
];

addEventListener("load", () => {
  let count = 0;

  const map = {},
    mapval2 = {};

  while (count < 18) {
    Data.forEach((val) => {
      let val1 = Math.trunc(Math.random() * 6);
      let val2 = Math.trunc(Math.random() * 4) + 1;
      console.log(val1);
      console.log(val2);
      let key = "";
      key += val1;
      key += val2;
      console.log(key);
      let keyForDif = val1 + `${val.subjectCode}`;
      if (map[key] || mapval2[keyForDif]) {
        // console.log("yeehndkdjfkdfjkdfjkjip");
      } else {
        console.log(" val2  " + `${val2}`);
        map[key] = 1;
        mapval2[keyForDif] = 1;
        count++;
        const element = document.querySelector(`#div${key}`);
        console.log(element);
        // element.style.paddingTop = "10px";

        element.innerHTML = `${val.subjectCode} <br> ${val.subjectNaem}<br>${val.roomNo}`;
      }
    });
  }
});
console.log(Data);
