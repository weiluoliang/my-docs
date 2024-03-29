---
title: 类加载子系统
icon: fab fa-markdown
order: 2
category:
  - Java
tag:
  - jvm
editLink: false
---

## 类加载器分类

### 启动类加载器 BootstrapClassLoader
负责加载核心包 如 rt.jar ,charsets.jar , 目录位于 JRE的lib下 

### 扩展类加载器 ExtClassloader 
负责加载JRE的扩展库，目录位于JRE的lib/ext 。 

### 应用类加载器 AppClassloader
负责加载classpath下的类库， 可指定加载jar  ，加参数 --classpath , --cp  


### 自定义类加载 CustomXxxClassloader


## 类加载过程

### 加载
将字节码文件从硬盘读取到内存的过程，这个过程是按需加载，只有被使用到的类才会加载，
`new` 一个对象 , `class.forName("xxx.class")` 等会触发加载 。

注意 ： `Math math = null` 这种不会被加载
 
### 校验
验证字节码文件格式是否正确

### 准备
给静态变量分配内存，并赋默认值。

### 解析
将符号引用替换为直接因为， **静态链接过程**

### 初始化
1. 给静态变量赋值
2. 执行静态代码块

> 静态变量与静态代码块不区分优先级，按代码顺序执行

## 双亲委派机制

### 双亲委派机制的过程
1. 委托父类加载器加载
2. 父类加载器找不到再自己去加载

> 表现为向上委托，向下加载的过程

### 为什么需要双亲委派机制？
1. 避免重复加载
2. 防止核心类被篡改

### Tomcat打破双亲委派机制
一个Tomcat实例支持多个应用
```
tomcat
  -- webapp1  依赖spring 3 
  -- webapp2  依赖spring 4
  -- webapp3  依赖spring 5 

我们看到每个应用可能依赖不同的spring，如果使用双亲委派会导致版本问题，所以Tomcat必须打破双亲委派
  
```

### 如何打破双亲委派机制？ 
自己写一个类去继承 `ClassLoader` , 并且重写 `loadClass` 和 `findClass` 两个方法。