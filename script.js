'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//　ＤＩＧ＿プログラミング基礎＿最終発表会＿2025/1/22（木）　　1211547　カズさん　こと　下川和輝
//　タイトル：　電気ＤＩＹ便利計算ツール

//　テスト関数説明 test(actual(関数機能の要件)、expected(期待値)）　
// 実際の使用記述　test(関数("引数１"), "期待値（結果）");
// TTD ----------
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

/**関数シグネチャー
 * @param {string} nameArray 与えれる名前（文字列） 
 * @returns {string} getString 与えられた引数に挨拶文を追加した文字列
 */

//　変数定義　－－－－－－－－－－－－－－－－－
//　＜入力項目＞
//　入力電圧（Ｖ）　inputVolt 数値型　0～100
//　入力電力（Ｗ）　inputWatts 数値型　0～3000
//　＜計算結果＞
//　出力電流（Ａ）　outputAmpere 数値型　（Ａ＝Ｗ÷Ｖ）
//　＜表示結果　配列・オブジェクト＞
//　電線種類｛オブジェクト｝　wireTypeObjet　［｛電流範囲，導体本数、絶縁体外径｝、...}

const wireTypeObjet = [
    {電流範囲: "0.00A以上～0.55A未満",導体本数: "11本",絶縁体外径: "Φ0.8"},
    {電流範囲: "0.55A以上～0.8A未満",導体本数: "16本",絶縁体外径: "Φ1.2"},
    {電流範囲: "0.8A以上～1.5A未満",導体本数: "30本",絶縁体外径: "Φ1.5"},
    {電流範囲: "1.5A以上～2A未満",導体本数: "40本",絶縁体外径: "Φ1.6"},
    {電流範囲: "2A以上～3A未満",導体本数: "60本",絶縁体外径: "Φ1.7"},
    {電流範囲: "3A以上～5A未満",導体本数: "100本",絶縁体外径: "Φ1.8"},
    {電流範囲: "5A以上～7.5A未満",導体本数: "150本",絶縁体外径: "Φ2.3"},
    {電流範囲: "7.5A以上～13A未満",導体本数: "252本",絶縁体外径: "Φ3.0"},
    {電流範囲: "13A以上～20A未満",導体本数: "400本",絶縁体外径: "Φ3.5"},
    {電流範囲: "20A以上～33A未満",導体本数: "680本",絶縁体外径: "Φ4.5"},
    {電流範囲: "33A以上～53A未満",導体本数: "1050本",絶縁体外径: "Φ5.5"},
    {電流範囲: "53A以上",導体本数: "規格外",絶縁体外径: "規格外"}
];

// /**関数シグネチャー
//  * @param {number} inputVolt 入力電圧（Ｖ） 
//  * @param {number} inputWatts 入力電力（Ｗ） 
//  * @returns {number} outputAmpere 出力電流（Ａ）
//  * */
// function currenting(inputVolt, inputWatts) {
//     console.log("入力電圧（Ｖ）：" + inputVolt);
//     console.log("使用電力（Ｗ）：" + inputWatts);
//     outputAmpere = inputWatts / inputVolt;
//     console.log("使用電流（Ａ）：" + outputAmpere);
//     return outputAmpere;
// }
// // test(currenting(12, 120), 10);
// // test(currenting(14, 168), 12);
// const = currenting(operatingVoltage, powerUsed);

function output(){
    const inputWatts = Number(document.getElementById("inputWatts").value);
    const inputVolt = Number(document.getElementById("inputVolt").value);
    let outputAmpere = 0;
    outputAmpere = inputWatts / inputVolt;

    console.log("入力電力：" + inputWatts);
    console.log("入力電圧：" + inputVolt);
    console.log("出力電流：" + outputAmpere);

    let wireType = 0;
    if (outputAmpere >= 0 && outputAmpere < 0.55) {
        wireType = 0;
    } else if (outputAmpere >= 0.55 && outputAmpere < 0.8) {
        wireType = 1;
    } else if (outputAmpere >= 0.8 && outputAmpere < 1.5) {
        wireType = 2;
    } else if (outputAmpere >= 1.5 && outputAmpere < 2) {
        wireType = 3;
    } else if (outputAmpere >= 2 && outputAmpere < 3) {
        wireType = 4;
    } else if (outputAmpere >= 3 && outputAmpere < 5) {
        wireType = 5;
    } else if (outputAmpere >= 5 && outputAmpere < 7.5) {
        wireType = 6;
    } else if (outputAmpere >= 7.5 && outputAmpere < 13) {
        wireType = 7;
    } else if (outputAmpere >= 13 && outputAmpere < 20) {
        wireType = 8;
    } else if (outputAmpere >= 20 && outputAmpere < 33) {
        wireType = 9;
    } else if (outputAmpere >= 33 && outputAmpere < 53) {
        wireType = 10;
    } else {
        wireType = 11;
    }

    console.log(wireTypeObjet[wireType].電流範囲);
    console.log(wireTypeObjet[wireType].導体本数);
    console.log(wireTypeObjet[wireType].絶縁体外径);

//結果出力領域　－－－－－－－－－－－－－－－－－－－－－－
    const output = document.createElement('p');
    output.textContent =
        "＜出力領域＞" +
        "　●出力電流（Ａ）：" + outputAmpere + "<br>" +
        "　●合致電流範囲：" + wireTypeObjet[wireType].電流範囲 + "<br>" +
        "　●導体本数：（1本0.08mm）" + wireTypeObjet[wireType].導体本数 + "<br>" +
        "　●絶縁体外径（mm）：" + wireTypeObjet[wireType].絶縁体外径 + "<br>";

    document.body.appendChild(output);
}

const button = document.getElementById("button");
button.addEventListener("click",output);

//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－




