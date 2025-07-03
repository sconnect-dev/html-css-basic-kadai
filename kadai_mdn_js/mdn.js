const date = new Date(); // 月は0ベースなので10月は9を指定

const y = date.getFullYear()-1;
const m = date.getMonth() +4; // 月を1ベースに変換
const d = date.getDate()+8; // 日付を取得

console.log(`${y}年${m}月${d}日`);
