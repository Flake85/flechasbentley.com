<template>
  <div class="container">
    <div id="phasmo-card" class="card">
      <div class="card-body">
        <div class="card-title">
          <h5>Phasmophobia Calculator</h5>
          <button
            type="button"
            v-for="evidence in tools"
            :key="evidence.id"
            :class="getGhostBtnClass(evidence)"
            class="btn"
            @click="selected(evidence)"
          >
            {{ evidence.name }}
          </button>
        </div>
        <div class="card-body">
          <div v-if="evidences.found.length || evidences.notFound.length">
            <div class="padded" v-if="displayGhosts.length > 1">
              <div v-for="ghost in displayGhosts" :key="ghost.id">
                <h5>{{ ghost.name }}</h5>
                <div v-if="evidences.found.length < 3">
                  <p>Evidence Needed:</p>
                  <template
                    v-for="evidence in ghost.evidence"
                    :key="evidence.id"
                  >
                    <span v-if="!evidences.found.includes(evidence)">
                      {{ evidence.name + " " }}
                    </span>
                  </template>
                </div>
                <p class="text-danger">
                  <strong>Strength: {{ ghost.strength }}</strong>
                </p>
                <p class="text-warning">
                  <strong>Weakness: {{ ghost.weakness }}</strong>
                </p>
              </div>
              <button class="btn btn-danger" @click="resetEvidence">
                Reset Evidence
              </button>
            </div>
            <div v-else-if="displayGhosts.length === 1">
              <div v-for="ghost in displayGhosts" :key="ghost.id">
                <h5>{{ ghost.name }}</h5>
                <p class="text-danger">
                  <strong>Strength: {{ ghost.strength }}</strong>
                </p>
                <p class="text-warning">
                  <strong>Weakness: {{ ghost.weakness }}</strong>
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="captureGhost(ghost)"
                >
                  Capture {{ ghost.name }}
                </button>
              </div>
            </div>
            <div v-else>
              <h5>
                Sorry! This combination of evidence is incompatible.<br />Please
                ensure evidence is selected correctly.
              </h5>
            </div>
          </div>
          <div v-else>
            <h5>Click the evidence above as you find/don't find evidence!</h5>
            <p><strong>Black = No Evidence Found</strong></p>
            <p class="text-success"><strong>Green = Found</strong></p>
            <p class="text-danger">
              <strong>Red = This Evidence is Definitely NOT an Option</strong>
            </p>
          </div>
          <div class="position-absolute bottom-0">
            <h5>Captured Ghosts:</h5>
            <table class="table">
              <thead>
                <tr>
                  <template v-for="ghost in ghostStats" :key="ghost.ghostId">
                    <th scope="col">
                      {{ getGhostById(ghosts, ghost.ghostId).name }}
                    </th>
                  </template>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td v-for="ghost in ghostStats" :key="ghost.ghostId">
                    {{ ghost.timesFound }}
                  </td>
                </tr>
              </tbody>
            </table>
            <button class="btn btn-danger" @click="releaseAll">
              Release All Ghosts
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  Ghost,
  ghosts,
  Evidence,
  evidence,
  getGhostById
} from "./../lib/phasmophobia";

interface GhostStats {
  ghostId: number;
  timesFound: number;
}

export default defineComponent({
  name: "Phasmophobia",
  data() {
    return {
      tools: evidence,
      ghosts,
      evidences: {
        found: [] as Evidence[],
        notFound: [] as Evidence[]
      },
      ghostStats: [] as GhostStats[]
    };
  },
  mounted() {
    if (localStorage.ghosts) {
      this.ghostStats = JSON.parse(localStorage.getItem("ghosts") as string);
    } else {
      this.ghosts.forEach(ghost => {
        this.ghostStats.push({ ghostId: ghost.id, timesFound: 0 });
      });
    }
  },
  watch: {
    ghostStats: {
      handler(newFound) {
        localStorage.setItem("ghosts", JSON.stringify(newFound));
      },
      deep: true
    }
  },
  computed: {
    displayGhosts(): Ghost[] {
      const possible = this.ghosts.filter(ghost => {
        if (this.evidences.found.length < 1) return false;
        let found = true;
        this.evidences.found.forEach(evidence => {
          if (!ghost.evidence.includes(evidence)) {
            found = false;
          }
        });
        return found;
      });
      if (this.evidences.found.length < 1) {
        return this.ghosts.filter(ghost => {
          let found = false;
          this.evidences.notFound.forEach(evidence => {
            if (ghost.evidence.includes(evidence)) {
              found = true;
            }
          });
          return !found;
        });
      } else {
        return possible.filter(ghost => {
          let found = false;
          this.evidences.notFound.forEach(evidence => {
            if (ghost.evidence.includes(evidence)) {
              found = true;
            }
          });
          return !found;
        });
      }
    }
  },

  methods: {
    selected(evidence: Evidence) {
      if (
        !this.evidences.found.includes(evidence) &&
        !this.evidences.notFound.includes(evidence)
      ) {
        this.evidences.found.push(evidence);
        return;
      }
      if (this.evidences.found.includes(evidence)) {
        this.evidences.found = this.evidences.found.filter(
          ev => ev !== evidence
        );
        this.evidences.notFound.push(evidence);
        return;
      }
      if (this.evidences.notFound.includes(evidence)) {
        this.evidences.notFound = this.evidences.notFound.filter(
          ev => ev !== evidence
        );
      }
    },
    getGhostBtnClass(evidence: Evidence) {
      if (this.evidences.found.includes(evidence)) {
        return "btn-success";
      } else if (this.evidences.notFound.includes(evidence)) {
        return "btn-danger";
      }
      return "btn-dark";
    },
    captureGhost(ghost: Ghost) {
      const index = this.ghostStats.findIndex(el => {
        return ghost.id === el.ghostId;
      });
      this.ghostStats[index].timesFound += 1;
      this.evidences.found = [];
      this.evidences.notFound = [];
    },
    resetEvidence() {
      (this.evidences.found = []), (this.evidences.notFound = []);
    },
    getGhostById: getGhostById,
    releaseAll() {
      const confirm = prompt(
        "Are you sure? This action cannot be undone!\nType 'release' and click ok to confirm!"
      );
      if (confirm === "release") {
        this.ghostStats = [];
        this.ghosts.forEach(ghost => {
          this.ghostStats.push({ ghostId: ghost.id, timesFound: 0 });
        });
      }
    }
  }
});
</script>

<style>
#phasmo-card {
  min-height: calc(100vh - 65.97px);
}
.padded {
  padding-bottom: 150px;
}
</style>
