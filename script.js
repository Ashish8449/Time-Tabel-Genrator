const Data = [
  {
    subjectNaem: "Data Structures",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
  {
    subjectNaem: "Probability & Statistics",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
  {
    subjectNaem: "Digital Electronics",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
  {
    subjectNaem: "Foundations of Information Technology",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
  {
    subjectNaem: "English",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
  {
    subjectNaem: "Formal Lang",
    subjectCode: "TIT -233",
    roomNo: 202,
  },
];

addEventListener("load", () => {
  let count = 0;

  const map = {};

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
      if (map[key]) {
        console.log("yeehndkdjfkdfjkdfjkjip");
      } else {
        console.log(val1 + val2);
        map[key] = 1;
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
