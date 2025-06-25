// 変数numに1以上の正の整数を代入する
let num = 15;

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が0であれば、「3の倍数です」という文字列を出力する
if (num % 3 == 0 && num % 5 == 0) {
  console.log('３と５の倍数です');
}
// 変数numの値が3であれば、「当たりです」という文字列を出力する
else if (num % 3 == 0 ) {
  console.log('３の倍数です');
}

else if (num % 5 == 0) {
  console.log('５の倍数です');
}

// それ以外のときは、変数numの値を出力する
else {
  console.log(num);
}