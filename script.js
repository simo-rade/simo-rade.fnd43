'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//　ＤＩＧ＿プログラミング基礎＿最終発表会＿2025/1/22（木）　　1211547　カズさん　こと　下川和輝
//　タイトル：　電気ＤＩＹ便利計算ツール

//　テスト関数 test(actual(関数機能の要件)、expected(期待値)）　
// // TTD　-----------
// let actual = 関数("引数１");
// let expected = "期待値（結果）"
// if (actual===expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.log("NG!");
//   console.log("actual:" + actual);
//   console.log("expected:" + expected); 
// }

// TTD2 ----------
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}
// test(関数("引数１"), "期待値（結果）");

//　変数定義
//　＜入力項目＞
//　屋内外区分　inOutDoors 文字列　"屋内"or"屋外"
//　使用電圧（Ｖ）　operatingVoltage 数値型　0～100
//　使用電力（Ｗ）　powerUsed 数値型　0～3000
//　＜計算結果＞
//　使用電流（Ａ）　currentUsed 数値型　（Ａ＝Ｗ÷Ｖ）
//　＜表示結果＞
//　電線種類｛オブジェクト｝　wireType{"ベア電流","スタイル",....}

let inOutDoors = "";
let operatingVoltage = 24.5;
let powerUsed = 850;
let currentUsed = 0;
let wireType = "";
const wireTypeObjet = {"規格外" : "電圧を上げる必要があります。" ,"53A" : "10AWG", "33A" : "12AWG", "20A" : "14AWG", "13A" : "16AWG", "7.5A" : "18AWG", "5A" : "20AWG", "3A" : "22AWG", "2A" : "24AWG", "1.5A" : "26AWG", "0.8A" : "28AWG", "0.55A" : "30AWG", };

// /**
//　関数　currenting ※電圧と電力から電流を求める関数
//  * @param voltage 電圧（引数１）
//  * @param electricPower 電力（引数２）
//  * @returns current 電流（戻り値）
//  */

let current = 0;
function currenting(voltage, electricPower) {
    console.log("入力電圧（Ｖ）：" + voltage);
    console.log("使用電力（Ｗ）：" + electricPower);
    current = electricPower / voltage;
    console.log("使用電流（Ａ）：" + current);
    return current;
}
// test(currenting(12, 120), 10);
// test(currenting(14, 168), 12);
currenting(operatingVoltage, powerUsed);

if (current >= 0 && current < 0.55) {
    wireType = "0.55A"
} else if (current >= 0.55 && current < 0.8) {
    wireType = "0.8A"
} else if (current >= 0.8 && current < 1.5) {
    wireType = "1.5A"
} else if (current >= 1.5 && current < 2) {
    wireType = "2A"
} else if (current >= 2 && current < 3) {
    wireType = "3A"
} else if (current >= 3 && current < 5) {
    wireType = "5A"
} else if (current >= 5 && current < 7.5) {
    wireType = "7.5A"
} else if (current >= 7.5 && current < 13) {
    wireType = "13A"
} else if (current >= 13 && current < 20) {
    wireType = "20A"
} else if (current >= 20 && current < 33) {
    wireType = "33A"
} else if (current >= 33 && current < 53) {
    wireType = "53A"
} else {
    wireType = "規格外"
}

console.log("導線種類（ベア電流）：" + wireType);
console.log("導線種類（スタイル）：" + wireTypeObjet[wireType]);

