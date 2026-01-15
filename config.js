// Supabase config - SAFE GLOBAL VERSION

window.SUPABASE_URL = "https://ztesoqtztyheezualipa.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_xCKbicWQaYM1knmkOqH-QA_3l5Xr96T";

// 使用绝对不冲突的全局变量名
window.sb = supabaseJs.createClient(
  window.SUPABASE_URL,
  window.SUPABASE_ANON_KEY
);

console.log("[Supabase] client ready:", typeof window.sb);