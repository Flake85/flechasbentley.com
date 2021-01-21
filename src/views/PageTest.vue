<template>
  <div>
    <!-- First section -->
    <header>
      <div class="title">
        <h1 class="animate__animated animate__bounceInDown">Animate.css</h1>
        <h2 class="animate__animated animate__bounceInDown">
          Level Up Your Websites with Animate.css
        </h2>
      </div>
      <span class="animate__animated animated animate__bounce"></span>
    </header>

    <!-- Scroll animations section -->
    <h2 class="new-section">Scroll Animations</h2>
    <div class="scroll-animations">
      <div class="animated">
        <span>&#9742;</span>
        <h3>Number One</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem
          pharetra a.
        </p>
      </div>
      <div class="animated">
        <span>&#9835;</span>
        <h3>Number Two</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem
          pharetra a.
        </p>
      </div>
      <div class="animated">
        <span>&#9730;</span>
        <h3>Number Three</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          quis lacinia est. Nulla malesuada massa orci, vitae placerat lorem
          pharetra a.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as $ from "jquery";
export default defineComponent({
  name: "pageTest",
  created() {
    $(document).ready(function() {
      // Check if element is scrolled into view
      function isScrolledIntoView(elem: any) {
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();
        const elemTop = $(elem).offset().top;
        const elemBottom = elemTop + $(elem).height();
        return elemBottom <= docViewBottom && elemTop >= docViewTop;
      }
      // If element is scrolled into view, fade it in
      $(window).scroll(function() {
        $(".scroll-animations .animated").each(function(this: any) {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass("animate__animated animate__fadeInLeft");
          }
        });
      });
    });
  }
});
</script>
<style>
.text-white {
  color: white;
}
/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */

/* body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  color: #333;
} */

/* .new-section {
  padding-top: 50px;
  text-align: center;
  font-size: 4em;
  font-weight: 100;
} */

/* Header styles */

header {
  position: relative;
  text-align: center;
  height: calc(100vh - 62px);
  background: linear-gradient(to right, #69bcf4, #30cc8b);
  color: #fff;
}

.title {
  padding-top: 0;
}

.title h1 {
  padding-top: 100px;
  padding-top: -webkit-calc(50vh - 113px);
  padding-top: expression(50vh - 113px);
  padding-top: -moz-calc(50vh - 113px);
  padding-top: -o-calc(50vh - 113px);
  padding-top: calc(50vh - 113px);
  font-size: 7em;
  font-weight: 100;
}

.title h2 {
  font-size: 2em;
}

header span.animated {
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  bottom: 50px;
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background: #fff;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
}

header span::before,
header span::after {
  position: absolute;
  top: -23px;
  content: "";
  height: 30px;
  width: 4px;
  border-radius: 2px;
  background: #fff;
}

header span::before {
  left: -10px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

header span::after {
  right: -10px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* Scroll animations styles */

.scroll-animations {
  display: flex;
}

.scroll-animations div {
  flex-grow: 1;
  padding: 30px;
  text-align: center;
  /* opacity: 0; */
  color: #333;
}

.scroll-animations div span {
  font-size: 4em;
  color: #5aa9e0;
}

.scroll-animations div h3 {
  font-size: 1.9em;
  font-weight: 400;
  margin-bottom: 10px;
}

/* Media queries */

@media (max-width: 759px) {
  header h1 {
    font-size: 5em;
  }

  .new-section {
    font-size: 3em;
  }

  .scroll-animations {
    display: block;
  }

  .scroll-animations div {
    padding: 20px 80px;
  }

  .click-animations input,
  .click-animations textarea,
  .click-animations button {
    width: 80%;
  }
}

@media (max-width: 475px) {
  .new-section {
    font-size: 2.5em;
  }

  header h1 {
    font-size: 3.2em;
  }

  header h2,
  .funky-animations h3 {
    font-size: 1.5em;
  }
}
</style>
