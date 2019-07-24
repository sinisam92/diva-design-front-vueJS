<template>
  <div>
    <section class="header">
      <div class="header-inner">
        <h1>Diva Design by Ivana</h1>
        <h4>~handmade with love~</h4>
      </div>
      <div class="container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>
        <span class="text">Scroll down</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.header {
  width: 100vw;
  height: 100vh;
  display: inline-block;
  justify-content: center;
  align-items: center;

  background: rgb(17, 16, 16);
  background: url("../../assets/images/pink-header.jpg");
}
.header-inner h1,
h4 {
  color: black;
  font-family: "Srisakdi", cursive;
}
.header-inner h1 {
  margin-top: 1.3em;
  font-size: 10em;
}
.header-inner h4 {
  font-size: 4em;
}
.container {
  position: relative;
  width: 24px;
  height: 24px;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: black;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}
.text {
  display: block;
  padding-top: 4rem;
  margin-top: 95px;
  margin-left: -30px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}
@keyframes pulse {
  to {
    opacity: 1;
  }
}
</style>
