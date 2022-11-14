<template>
  <!-- <nav> -->
    <!-- router-link相当于a标签，to="路由path" -->
    <!-- <router-link to="/">LayOut</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <!-- router-view展示路由相对应的组件内容 -->
  <router-view></router-view>
</template>

<style>
.body,html{
  padding: 0;
  margin: 0;
}

/* flex布局类名 */
/* justify-content:
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 */
.flex-float{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 居中对齐弹性盒的各项 <div> 元素： */
.flex{
  display: flex;
  align-items: center;
}
</style>
