import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "luoliang的笔记",
  description: "种树最好的时间是十年前，其次是现在",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
