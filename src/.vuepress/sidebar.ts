import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
	{
      text: "深入JVM",
      icon: "laptop-code",
      prefix: "jvm/",
      link: "jvm/",
      children: "structure",
    }
  ],
});
