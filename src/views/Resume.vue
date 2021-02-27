<template>
  <div id="resume" class="container">
    <div class="row">
      <div class="col">
        <h1 class="txt-white">My Resumé</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="text-center mb-2">
              <h2 class="card-title">Flechas W. Bentley</h2>
              <p class="card-subtitle">Pineville, LA 71360</p>
              <p class="card-subtitle">
                <strong>Email: </strong>Flechas.Bentley@gmail.com
              </p>
              <p class="card-subtitle mb-5">
                <strong>Github: </strong
                ><a target="_blank" href="https://github.com/Flake85"
                  >https://github.com/Flake85</a
                >
              </p>
            </div>
            <h4 class="text-decoration-underline mb-4">Work Experience</h4>
            <div v-for="job in jobs" :key="job.company" class="mb-5">
              <div class="row">
                <div class="col-sm text-sm-center order-sm-2">
                  <h4 class="mb-0">
                    <strong>{{ job.company }}</strong>
                  </h4>
                </div>
                <div class="col-sm text-sm-end order-sm-3">
                  <p class="mb-0">{{ job.location }}</p>
                </div>
                <div class="col-sm order-sm-1">
                  <div v-if="job.datesEmployed2">
                    <p class="mb-0">{{ job.datesEmployed }}</p>
                    <p>{{ job.datesEmployed2 }}</p>
                  </div>
                  <div v-else>
                    <p>{{ job.datesEmployed }}</p>
                  </div>
                </div>
              </div>
              <p class="mb-0">
                <strong>{{ job.title }}</strong>
              </p>
              <ul>
                <li v-for="(duty, index) in job.duties" :key="index">
                  {{ duty.duty }}
                </li>
              </ul>
            </div>
            <h4 class="text-decoration-underline mb-4">Education</h4>
            <div class="row">
              <div class="col-sm text-sm-center order-sm-2">
                <h4 class="mb-0"><strong>Pineville High School</strong></h4>
              </div>
              <div class="col-sm text-sm-end order-sm-3">
                <p class="mb-0">Pineville, LA</p>
              </div>
              <div class="col-sm order-sm-1">
                <p>1999 - 2004</p>
              </div>
            </div>
            <ul class="mb-5">
              <li>Diploma</li>
            </ul>
            <h4 class="text-decoration-underline mb-4">Tech Stack</h4>
            <div class="row">
              <div class="col-sm">
                <ul class="mb-0">
                  <li>HTML</li>
                  <li>Vue</li>
                  <li>Digital Ocean</li>
                  <li>Github</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div class="col-sm">
                <ul class="mb-0">
                  <li>CSS</li>
                  <li>Nuxt</li>
                  <li>Git</li>
                  <li>Linux</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div class="col-sm">
                <ul class="mb-0">
                  <li>JavaScript</li>
                  <li>GoLang</li>
                  <li>Gitlab</li>
                  <li>Windows</li>
                  <li>MySQL</li>
                </ul>
              </div>
              <div class="col"><span /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "resume",
  data() {
    return {
      jobs: [
        {
          company: "Uniti Global",
          location: "Aurora, CO",
          datesEmployed: "1/2020 - Present",
          title: "Front End Developer",
          duties: [
            {
              duty:
                "Create user-friendly web pages using various programming languages including, but not limited to HTML, CSS, JavaScript and GoLang"
            },
            {
              duty:
                "Work with backend developers to troubleshoot and update usability."
            },
            {
              duty: "Design mobile-based features using Bootstrap-Vue."
            },
            {
              duty: "Test new features using jestjs."
            },
            {
              duty:
                " Help with code reviews and code versioning using a GitLab repository"
            }
          ]
        },
        {
          company: "D&J Pools",
          location: "Shreveport, LA",
          datesEmployed: "3/2017 - 10/2018",
          datesEmployed2: "5/2003 - 9/2012",
          title: "Job Foreman",
          duties: [
            {
              duty:
                "Ensure necessary equipment was loaded onto truck on a daily basis."
            },
            {
              duty:
                "Measure pools accurately with various equipment for liner jobs and installs."
            },
            {
              duty: "Work closely with customers one-on-one."
            },
            {
              duty:
                "Write up bills for customers when job was completed to our standards and beyond the customer's satisfaction."
            },
            {
              duty:
                "Pick up pool kits from warehouse and verified the contents with the purchase order."
            },
            {
              duty: "Supervised up to four employees."
            }
          ]
        },
        {
          company: "Distran Steel",
          location: "Pineville, LA",
          datesEmployed: "5/2014 - 9/2014",
          title: "Machine Operator",
          duties: [
            {
              duty:
                "Work in a fast-paced production enviroment with sensitive deadlines."
            },
            {
              duty:
                "Program, operate and monitor various equipment using basic math while referring to blueprints and adhering to safety standards."
            },
            {
              duty:
                "Collaborate with maintenance workers to diagnose and repair various equipment."
            },
            {
              duty:
                "Work closely with quality control to make sure parts were to specification."
            },
            {
              duty:
                "Mark parts with paint markers and/or manually hand-stamping material."
            },
            {
              duty: "Train new employees on various equipment."
            },
            {
              duty: "Report any potential safety hazards weekly."
            }
          ]
        },
        {
          company: "Old South Fabricators",
          location: "Lecompte, LA",
          datesEmployed: "2/2013 - 3/2014",
          title: "Quality Control Manager",
          duties: [
            {
              duty:
                "Work in a fast-paced production enviroment with sensitive deadlines."
            },
            {
              duty:
                "Visually inspect, measure and record parts with various equipment to ensure all parts were to client specifications."
            },
            {
              duty:
                "Work closely with machine operators and maintenance to keep parts within a desired tolerance."
            },
            {
              duty:
                "Inspect blueprints and autocad programs to verify they match and make corrective actions if needed."
            },
            {
              duty:
                "Fill out various forms for records out of specification and parts the pass inspections."
            },
            {
              duty: "Label and prep all out-going packages for shipping."
            },
            {
              duty:
                "Collaborate with all departments to ensure all purchase orders were on schedule for shipping."
            },
            {
              duty: "Send off various measuring equipment needing calibration."
            },
            {
              duty: "Directly supervised three employees."
            },
            {
              duty:
                "Help with hiring process and train new employees in my department."
            },
            {
              duty: "Particapate in monthly production meetings."
            }
          ]
        }
      ]
    };
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
.tech-list {
  float: left;
  margin: 0 20px;
}
</style>
