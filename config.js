/**
 * Pro Player 销售系统
 * Supabase 全局配置文件（唯一初始化点）
 * 注意：整个项目只允许在这里 createClient 一次
 */

/* =========================
   1. 填写你自己的 Supabase 信息
   ========================= */

// 示例格式： https://abcd1234.supabase.co
const SUPABASE_URL = "https://ztesoqtztyheezualipa.supabase.co";

// anon public key（很长的一串，以 eyJ 开头）
const SUPABASE_ANON_KEY = "b_publishable_xCKbicWQaYM1knmkOqH-QA_3l5Xr96T";

/* =========================
   2. 创建 Supabase 客户端（不要改）
   ========================= */

const supabase = supabaseJs.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/* =========================
   3. 调试用（可保留，不影响上线）
   ========================= */

console.log("[Supabase] client initialized");
console.log("[Supabase] URL type:", typeof SUPABASE_URL);
console.log("[Supabase] client type:", typeof supabase);
