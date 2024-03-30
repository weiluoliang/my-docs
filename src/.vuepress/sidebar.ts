import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Java基础",
      icon: "laptop-code",
      prefix: "java/",
      link: "java/",
      children: "structure",
    },{
      text: "深入JVM",
      icon: "laptop-code",
      prefix: "jvm/",
      link: "jvm/",
      children: "structure",
    },{
      text: "系统设计",
      icon: "laptop-code",
      prefix: "systems_design/",
      link: "systems_design/",
      children: "structure",
    }
  ],
});
