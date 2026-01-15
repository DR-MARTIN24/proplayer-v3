// Supabase 配置 - 正确加载 SDK
const SUPABASE_URL = "https://ztesoqtztyheezualipa.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xCKbicWQaYM1knmkOqH-QA_3l5Xr96T";

// 使用全局变量初始化
window.sb = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// 用于调试，确认客户端初始化成功
console.log("[Supabase] client ready:", typeof window.sb);
