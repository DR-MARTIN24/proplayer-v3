// Supabase 全局配置（最终可用版）

const SUPABASE_URL = "https://ztesoqtztyheezualipa.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_xCKbicWQaYM1knmkOqH-QA_3l5Xr96T";

// 创建 Supabase 客户端（全项目只允许这一处）
const supabase = supabaseJs.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
