// config.js
(function() {
  const SUPABASE_URL = "https://ztesoqtztyheezualipa.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_xCKbicWQaYM1knmkOqH-QA_3l5Xr96T";

  // 检查 SDK 是否加载成功
  if (typeof supabase === 'undefined') {
    console.error("[Supabase] SDK 未能正确加载，请检查 CDN 链接");
    return;
  }

  // 初始化并挂载到 window.sb
  // 注意：直接调用 supabase.createClient，不要再定义名为 supabase 的变量
  window.sb = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  console.log("[Supabase] client ready:", typeof window.sb);
})();