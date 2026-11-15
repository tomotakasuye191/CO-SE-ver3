/* =========================================================================
   実験システム共通の設定（site1 / site2 / site4 / site5 がこのファイルを読み込みます）
   ★ ここだけ書き換えれば、全ページの接続先が変わります ★
   ========================================================================= */
window.EXP_CONFIG = {
  // Apps Script のウェブアプリURL（新しいスプレッドシート＋新しいデプロイで発行されたもの）
  GAS_URL: "https://script.google.com/macros/s/AKfycbxDxVNaQ1POmiYbNWyxC-LdSIl9TQhvD84isd3StEddRWJlZ9ldv_LT96Xd0WAYi6XV/exec",
  // このサイトの公開URL（末尾スラッシュあり）
  BASE_URL: "https://tomotakasuye191.github.io/CO-SE-ver3/",
  // CO画面の制限時間。ver3 は提示枚数ごとに秒数を指定（5枚=15秒・10枚=20秒・15枚=30秒・20枚=40秒）。ver2 はこの行ごと消して制限なし
  CO_TIME_BY_SIZE_SEC: { 5: 15, 10: 20, 15: 30, 20: 40 },
  CO_TIME_PER_ITEM_SEC: 0,   // 枚数×秒数の方式（上の指定があるときは使われない。0 = 使わない）
  CO_TIME_LIMIT_SEC: 0       // 固定秒数（上が0のときだけ使われる。0 = 制限なし）
};
