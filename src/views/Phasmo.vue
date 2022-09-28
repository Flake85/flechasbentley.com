<template>
  <div class="container">
    <div id="phasmo-card" class="card">
      <div class="card-body">
        <div class="card-title">
          <h5>Phasmophobia Calculator</h5>
          <template v-for="evidence in tools" :key="evidence.id">
            <button
              type="button"
              :class="getEvidenceBtnClass(evidence)"
              class="btn padded-btn"
              @click="selected(evidence)"
            >
              {{ evidence.name }}
            </button>
          </template>
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

          <h5>Captured Ghosts:</h5>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Ghosts Caught</th>
                  <th
                    v-for="ghost in localGhosts"
                    :key="ghost.ghostId"
                    scope="col"
                  >
                    {{ getGhostById(ghosts, ghost.ghostId).name }}
                  </th>
                  <th>Total:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>This Session:</td>
                  <td v-for="ghost in sessionGhosts" :key="ghost.ghostId">
                    {{ ghost.timesFound }}
                  </td>
                  <td>{{ totalCaptured(sessionGhosts) }}</td>
                </tr>
                <tr>
                  <td>All Time:</td>
                  <td
                    v-for="ghost in localGhosts"
                    :key="(ghost.ghostId as Ghost)"
                  >
                    {{ ghost.timesFound }}
                  </td>
                  <td>{{ totalCaptured(localGhosts) }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button class="btn btn-danger padded-btn" @click="clearSession">
            Clear Session
          </button>
          <button class="btn btn-danger padded-btn" @click="clearAllStorage">
            Release All Ghosts
          </button>
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
  GhostStats,
  getGhostById
} from "./../lib/phasmophobia";

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
      localGhosts: [] as GhostStats[],
      sessionGhosts: [] as GhostStats[]
    };
  },
  mounted() {
    this.ghosts;
    if (localStorage.ghosts) {
      this.localGhosts = this.getStoredGhosts(localStorage);
    } else {
      this.fillGhostStatsData(this.localGhosts);
    }
    if (sessionStorage.ghosts) {
      this.sessionGhosts = this.getStoredGhosts(sessionStorage);
    } else {
      this.fillGhostStatsData(this.sessionGhosts);
    }
  },
  watch: {
    localGhosts: {
      handler(newFound: any) {
        localStorage.setItem("ghosts", JSON.stringify(newFound));
      },
      deep: true
    },
    sessionGhosts: {
      handler(newFound: any) {
        sessionStorage.setItem("ghosts", JSON.stringify(newFound));
      },
      deep: true
    }
  },
  computed: {
    displayGhosts(): any {
      const possible: any = (this as any).filterGhostsWithFound();
      return (this as any).filterGhostWithNotFound(possible);
    }
  },
  methods: {
    filterGhostWithNotFound(possible: Ghost[]) {
      return possible.filter((ghost: Ghost) => {
        let found = false;
        (this as any).evidences.notFound.forEach((evidence: Evidence) => {
          if (ghost.evidence.includes(evidence)) {
            found = true;
          }
        });
        return !found;
      });
    },
    filterGhostsWithFound(): Ghost[] {
      return (this as any).ghosts.filter((ghost: Ghost) => {
        let found = true;
        (this as any).evidences.found.forEach((evidence: Evidence) => {
          if (!ghost.evidence.includes(evidence)) {
            found = false;
          }
        });
        return found;
      });
    },
    totalCaptured(...storage: Array<GhostStats[]>): number {
      let sum = 0;
      for (let x = 0; x < storage.length; x++) {
        storage[x].forEach((ghost: GhostStats) => {
          sum += ghost.timesFound;
        });
      }
      return sum;
    },
    getStoredGhosts(storage: Storage): GhostStats[] {
      return JSON.parse(storage.getItem("ghosts") as string);
    },
    fillGhostStatsData(...storedGhosts: Array<GhostStats[]>) {
      for (let x = 0; x < storedGhosts.length; x++) {
        (this as any).ghosts.forEach((ghost: Ghost) => {
          storedGhosts[x].push({ ghostId: ghost.id, timesFound: 0 });
        });
      }
    },
    resetEvidence() {
      ((this as any).evidences.found = []),
        ((this as any).evidences.notFound = []);
    },
    selected(evidence: Evidence) {
      if (
        !(this as any).evidences.found.includes(evidence) &&
        !(this as any).evidences.notFound.includes(evidence)
      ) {
        (this as any).evidences.found.push(evidence);
        return;
      }
      if ((this as any).evidences.found.includes(evidence)) {
        (this as any).evidences.found = (this as any).evidences.found.filter(
          (ev: any) => ev !== evidence
        );
        (this as any).evidences.notFound.push(evidence);
        return;
      }
      if ((this as any).evidences.notFound.includes(evidence)) {
        (this as any).evidences.notFound = (this as any).evidences.notFound.filter(
          (ev: any) => ev !== evidence
        );
      }
    },

    getEvidenceBtnClass(evidence: Evidence) {
      if ((this as any).evidences.found.includes(evidence)) {
        return "btn-success";
      }
      if ((this as any).evidences.notFound.includes(evidence)) {
        return "btn-danger";
      }
      return "btn-dark";
    },
    updateGhostStats(ghost: Ghost, ...storage: Array<GhostStats[]>) {
      for (let x = 0; x < storage.length; x++) {
        const index = storage[x].findIndex((ghostStat: GhostStats) => {
          return ghost.id === ghostStat.ghostId;
        });
        storage[x][index].timesFound += 1;
      }
    },
    captureGhost(ghost: Ghost) {
      this.updateGhostStats(
        ghost,
        (this as any).localGhosts,
        (this as any).sessionGhosts
      );
      this.resetEvidence();
    },
    clearSession() {
      if ((this as any).totalCaptured((this as any).sessionGhosts) !== 0) {
        const confirm = prompt(
          "This action removes all ghosts from this session.\nAll ghosts found this session are saved in the all time row...\nType 'confirm' to clear this session"
        );
        if (confirm === "confirm") {
          (this as any).sessionGhosts = [];
          this.fillGhostStatsData((this as any).sessionGhosts);
        }
      } else {
        alert("You must have ghosts captured this session to clear it!");
      }
    },
    clearAllStorage() {
      const confirm = prompt(
        "This action removes all captured ghosts in this session AND all time captured.\nAre you sure? This action cannot be undone!\nType 'release' and click ok to confirm!"
      );
      if (confirm === "release") {
        (this as any).localGhosts = [];
        (this as any).sessionGhosts = [];
        this.fillGhostStatsData(
          (this as any).localGhosts,
          (this as any).sessionGhosts
        );
      }
    },
    getGhostById: getGhostById
  }
} as any);
</script>

<style>
#phasmo-card {
  min-height: calc(100vh - (66px + 72px));
}
.padded-btn {
  margin-right: 5px;
  margin-top: 5px;
}
.padded {
  padding-bottom: 300px;
}
</style>
