'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//　ＤＩＧ＿プログラミング基礎＿最終発表会＿2025/1/22（木）　　1211547　シモさん　こと　下川和輝
//　タイトル：　電気ＤＩＹ便利計算ツール


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

function output(){
    const inputWatts = Number(document.getElementById("inputWatts").value);
    const inputVolt = Number(document.getElementById("inputVolt").value);
    let outputAmpere = 0;
    outputAmpere = Math.floor((inputWatts / inputVolt)*100)/100;

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
    const input1 = document.createElement('p');
    input1.id = "input";
    input1.textContent =
        "　●入力電力：" + inputWatts + "W　／　●入力電圧：" + inputVolt + "V";
    document.body.appendChild(input1);

    const output1 = document.createElement('p');
    output1.id = "output";
    output1.textContent =
        "　●出力電流：" + outputAmpere + "A";
    document.body.appendChild(output1);

    const output2 = document.createElement('p');
    output2.id = "output";
    output2.textContent =
        "　●合致電流範囲：" + wireTypeObjet[wireType].電流範囲;
    document.body.appendChild(output2);

    const output3 = document.createElement('p');
    output3.id = "output";
    output3.textContent =
        "　●導体本数：（1本0.08mm）" + wireTypeObjet[wireType].導体本数 + "本";
    document.body.appendChild(output3);

    const output4 = document.createElement('p');
    output4.id = "output";
    output4.textContent =
        "　●絶縁体外径：" + wireTypeObjet[wireType].絶縁体外径 + "mm";
    document.body.appendChild(output4);

    const output5 = document.createElement('p');
    output5.id = "line";
    output5.textContent =
        "　＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝";
    document.body.appendChild(output5);

}

//計算実行のボタン押下で処理実行－－－－－－－－－－－－－－－－－－－－
const button = document.getElementById("button");
button.addEventListener("click",output);
//－－－－－－－－－－－－－－－－－－－－－－－－－－－－－

