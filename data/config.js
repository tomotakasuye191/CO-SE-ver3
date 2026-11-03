/* =========================================================================
   実験システム共通の設定（site1 / site2 / site4 / site5 がこのファイルを読み込みます）
   ★ ここだけ書き換えれば、全ページの接続先が変わります ★
   ========================================================================= */
window.EXP_CONFIG = {
  // Apps Script のウェブアプリURL（新しいスプレッドシート＋新しいデプロイで発行されたもの）
  GAS_URL: "https://script.google.com/macros/s/AKfycbxDxVNaQ1POmiYbNWyxC-LdSIl9TQhvD84isd3StEddRWJlZ9ldv_LT96Xd0WAYi6XV/exec",
  // このサイトの公開URL（末尾スラッシュあり）
  BASE_URL: "https://tomotakasuye191.github.io/CO-SE-ver3/",
  // CO画面の制限時間。ver3 は「提示枚数×5秒」（5枚=25秒・10枚=50秒・15枚=75秒・20枚=100秒）。ver2 は制限なし(0)
  CO_TIME_PER_ITEM_SEC: 5,   // 1枚あたりの秒数（0 = この方式を使わない）
  CO_TIME_LIMIT_SEC: 0       // 固定秒数（上が0のときだけ使われる。0 = 制限なし）
};
