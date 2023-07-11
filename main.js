const str = 'dnsdsfasfefkmdksakdnskjndnemodskaldsald';
const nemo = 'nemo';

const indexStart = str.indexOf(nemo);

if (indexStart !== -1) {
  const endOfIndex = indexStart + nemo.length;
  const extractedWord = str.substring(indexStart, endOfIndex);
  console.log(extractedWord);
} else {
  console.log('nemo not found');
}

function findingNemo() {
  const nemo = [
    'not nemo',
    'not nemo',
    'nemo',
    'not nemo',
    'not nemo',
    'not nemo ',
  ];

  const findNemo = nemo.find((element) => element == 'nemo');
  const result = findNemo || 'nemo not found';
  console.log(` ${result} in array!`);
}

findingNemo();
