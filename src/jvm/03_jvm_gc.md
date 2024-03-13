---
title: JVM的垃圾回收
icon: fab fa-markdown
order: 3
category:
  - Java
tag:
  - jvm
editLink: false
---

## 前言
垃圾的定义： 不再被引用的对象就是垃圾。  
那如何判断一个对象是否被引用呢？
- 引用计数法  用一个标记记录引用次数，当引用次数为0时，就是垃圾
- 可达性分析法  从GC Roots开始，遍历所有对象，如果对象不可达，就是垃圾。

## 垃圾回收算法
- 标记-清除算法
- 标记-压缩算法
- 复制算法
- 分代算法


## 垃圾回收器

### Serial收集器

### ParNew收集器

### Parallel Scavenge收集器

### Serial Old收集器

### Parallel Old收集器

### CMS收集器

### G1收集器

### ZGC收集器

### Shenandoah收集器

