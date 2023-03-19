// const List = (Music, Vocal, Cover, Origin) => {
  const albumlist = {
    music: "할로윈나이트메어",
    vacal: "RH",
    cover: "No",
    original: "Yes"
  }
//   return albumlist
// }

// List("할로윈나이트메어", "RH", "No", "Yes");
console.log(albumlist)

for (let key in albumlist) {
  console.log(`insert into album(${key}) value (${albumlist[key]})`);
};
