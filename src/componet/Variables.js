const theme = {
  Color1: "#151620",
  color2: "#101117",
  color3: "#212333",
  gray: '#D9D9D9',
  fontsColor: '#D3DCEA'
};

export default theme;

var mergeTwoLists = function(list1, list2) {
    let combinedArray  = [...list1, ...list2];
    combinedArray.sort((a, b) => a - b);
    console.log(combinedArray);
};

mergeTwoLists([],[0])