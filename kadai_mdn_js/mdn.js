const date = new Date(2024, 9, 12); // 月は0ベースなので10月は9を指定

const y = date.getFullYear();
const m = date.getMonth() + 1; // 月を1ベースに変換
const d = date.getDate(); // 日付を取得

console.log(`${y}年${m}月${d}日`);
