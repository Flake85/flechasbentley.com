<template>
  <div id="resume" class="container">
    <div class="row">
      <h1 class="txt-white">My Resumé</h1>
    </div>
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5 mt-5">
            <div class="col-lg-9">
              <h1 class="card-title">
                <strong>Flechas Bentley</strong>
              </h1>
              <p>Motivated to learn new things</p>
            </div>
            <div class="col-lg-3 text-nowrap">
              <p>
                Pineville, LA 71360 <br />
                <strong>Flechas.Bentley@gmail.com</strong><br />
                <strong>github.com/Flake85</strong>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-9 pe-5 mb-5">
              <h6 class="section-title"><strong>EXPERIENCE</strong></h6>
              <div v-for="job in jobs" :key="job.company" class="mb-5">
                <div class="row">
                  <p>
                    <strong>{{ job.company }}, </strong> {{ job.location }}
                    <i class="bi bi-dash"></i> <em>{{ job.title }}</em
                    ><br />
                  </p>
                  <p class="fw-light">{{ job.datesEmployed }}</p>
                </div>
                <ul>
                  <li v-for="(duty, index) in job.duties" :key="index">
                    {{ duty.duty }}
                  </li>
                </ul>
              </div>
              <div class="mb-5">
                <h6 class="section-title"><strong>EDUCATION</strong></h6>
                <p>
                  <strong>Pineville High School, </strong> Pineville, LA
                  <i class="bi bi-dash"></i> <em>Diploma</em><br />
                </p>
                <p class="fw-light">1999 - 2004</p>
              </div>
              <h6 class="section-title"><strong>CERTIFICATIONS</strong></h6>
              <div v-for="cert in certifications" :key="cert.provider">
                <p
                  v-for="certification in cert.certification"
                  :key="certification.link"
                >
                  <strong>{{ cert.provider }}: </strong>
                  <a target="_blank" :href="certification.link">{{
                    certification.title
                  }}</a>
                </p>
              </div>
            </div>
            <div class="col-lg-3">
              <h6 class="section-title"><strong>SKILLS</strong></h6>
              <div v-for="skill in skills" :key="skill">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "resume",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      jobs: "getJobs",
      certifications: "getCertifications",
      skills: "getSkills"
    })
  }
});
</script>
<style lang="scss">
#resume {
  min-height: calc(100vh - (66px + 72px));
}
.txt-white {
  color: white;
}
h1.card-title {
  font-size: 75px;
}
.section-title {
  margin-bottom: 3rem;
  color: #0d6efd;
}
</style>
