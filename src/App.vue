<template>
  <div>
    <header>
      <span class="title-text">
        <router-link :to="{ path:'/' }">Survey Squirrel</router-link>
      </span>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/index.scss";

body, html {
  margin: 0px;
  font-family: Arial, Helvetica, sans-serif;
}

header {
  text-align: center;
  background-color: $color-green;
  padding: 30px 0px;
}

main {
  margin-top: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a {
  color: $color-white;
  text-decoration: none;
}

.box-border {
  background-color: $color-white;
  border: 1px solid #CCC;
  width: 800px;
}

.title-text {
  font-size: 30px;
  color: #FFF;
  padding: 0px 20px;
}

.title-text-dark {
  color: #555;
}

input[type=text] {
  font-size: 14px;
  padding: 10px;
  width: 70%;
  border-radius: 3px;
  border: 1px solid #CCC;
}

button {
  background-color: $color-btn-green;
  border: none;
  color: white;
  padding: 8px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 0px 4px;
  border-radius: 2px;
  border: 1px solid #888;
}

.button-light {
  background-color:$color-btn-light;
  color: #333;
  font-weight: bolder;
  font-size: 10px;
  border: 1px solid #CCC;
  border-radius: 2px;
  margin: 10px;
}

.main {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.box-question {
  width: 80%;
  min-height: 260px;
  text-align: left;
  margin: 20px;
}

.right {
  text-align: right;
}

.clear-border {
  border: 0px;
}

.full-width {
  width: 100%;
}
</style>
