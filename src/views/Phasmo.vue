<script setup lang="ts">
  import { ref, onMounted, computed, reactive, watch } from "vue";
  import {
    Ghost,
    ghosts,
    Evidence,
    evidence,
    GhostStats,
    getGhostById,
  } from "./../lib/phasmophobia";

  const ghostArr = ref(ghosts)
  const tools = ref(evidence)
  const evidences = reactive({
    found: [] as Evidence[],
    notFound: [] as Evidence[]
  })
  const localGhosts = ref([] as GhostStats[])
  const sessionGhosts = ref([] as GhostStats[])

  function getStoredGhosts(storage: Storage): GhostStats[] {
    return JSON.parse(storage.getItem("ghosts") as string);
  }
  function fillGhostStatsData(...storedGhosts: Array<GhostStats[]>) {
    for (let x = 0; x < storedGhosts.length; x++) {
      ghosts.forEach((ghost: Ghost) => {
        storedGhosts[x].push({ ghostId: ghost.id, timesFound: 0 });
      });
    }
  }
  function totalCaptured(...storage: Array<GhostStats[]>): number {
    let sum = 0;
    for (let x = 0; x < storage.length; x++) {
      storage[x].forEach((ghost: GhostStats) => {
        sum += ghost.timesFound;
      });
    }
    return sum;
  }
  function resetEvidence(): void {
    (evidences.found = []),
    (evidences.notFound = []);
  }
  function selected(evidence: Evidence): void {
    if (
      !evidences.found.includes(evidence) &&
      !evidences.notFound.includes(evidence)
    ) {
      evidences.found.push(evidence);
      return;
    }
    if (evidences.found.includes(evidence)) {
      evidences.found = evidences.found.filter(
        (ev: Evidence) => ev !== evidence
      );
      evidences.notFound.push(evidence);
      return;
    }
    if (evidences.notFound.includes(evidence)) {
      evidences.notFound = evidences.notFound.filter(
        (ev: Evidence) => ev !== evidence
      );
    }
  }
  function getEvidenceBtnClass(evidence: Evidence): string {
    if (evidences.found.includes(evidence)) {
      return "btn-success";
    }
    if (evidences.notFound.includes(evidence)) {
      return "btn-danger";
    }
    return "btn-dark";
  }
  function updateGhostStats(ghost: Ghost, ...storage: Array<GhostStats[]>) {
    for (let x = 0; x < storage.length; x++) {
      const index = storage[x].findIndex((ghostStat: GhostStats) => {
        return ghost.id === ghostStat.ghostId;
      });
      storage[x][index].timesFound += 1;
    }
  }
  function captureGhost(ghost: Ghost) {
    updateGhostStats(
      ghost,
      localGhosts.value,
      sessionGhosts.value
    )
    localStorage.setItem("ghosts", JSON.stringify(localGhosts.value))
    sessionStorage.setItem("ghosts", JSON.stringify(sessionGhosts.value))
    resetEvidence();
  }
  function clearSession() {
    if (totalCaptured(sessionGhosts.value) !== 0) {
      const confirm = prompt(
        "This action removes all ghosts from this session.\nAll ghosts found this session are saved in the all time row...\nType 'confirm' to clear this session"
      );
      if (confirm === "confirm") {
        sessionGhosts.value = [];
        fillGhostStatsData(sessionGhosts.value);
      }
    } else {
      alert("You must have ghosts captured this session to clear it!");
    }
  }
  function clearAllStorage() {
    const confirm = prompt(
      "This action removes all captured ghosts in this session AND all time captured.\nAre you sure? This action cannot be undone!\nType 'release' and click ok to confirm!"
    );
    if (confirm === "release") {
      localGhosts.value = [];
      sessionGhosts.value = [];
      fillGhostStatsData(
        localGhosts.value,
        sessionGhosts.value
      );
    }
  }
  getGhostById

  onMounted(() => {
    if (localStorage.ghosts) {
      localGhosts.value = getStoredGhosts(localStorage);
    } else {
      fillGhostStatsData(localGhosts.value);
    }
    if (sessionStorage.ghosts) {
      sessionGhosts.value = getStoredGhosts(sessionStorage);
    } else {
      fillGhostStatsData(sessionGhosts.value);
    }
  })

  const displayGhosts = computed(() => {
    const possible: Ghost[] = ghostArr.value.filter((ghost: Ghost) => {
      let found = true;
      evidences.found.forEach((evidence: Evidence) => {
        if (!ghost.evidence.includes(evidence)) {
          found = false;
        }
      });
      return found;
    });
    return possible.filter((ghost: Ghost) => {
      let found = false;
      evidences.notFound.forEach((evidence: Evidence) => {
        if (ghost.evidence.includes(evidence)) {
          found = true;
        }
      });
      return !found;
    });
  })

  defineExpose({ 
    tools, ghosts, evidences, localGhosts, sessionGhosts, displayGhosts, 
    selected, getEvidenceBtnClass, captureGhost, clearSession, clearAllStorage 
  })
</script>

<template>
  <div class="container">
    <div id="phasmo-card" class="card border-primary">
      <div class="card-body">
        <div class="card-title">
          <h5>Phasmophobia Calculator</h5>
          <h6 class="text-danger">*** This tool is outdated and is now implemented in-game ***</h6>
          <template v-for="evidence in tools" :key="evidence.id">
            <button type="button"
                    :class="getEvidenceBtnClass(evidence)"
                    class="btn padded-btn"
                    @click="selected(evidence)"
            >{{ evidence.name }}
            </button>
          </template>
        </div>
        <div class="card-body">
          <div v-if="evidences.found.length || evidences.notFound.length">
            <div class="row padded" v-if="displayGhosts.length">
              <div class="card mb-3 me-3 border-dark" style="width: 18rem;" v-for="ghost in displayGhosts" :key="ghost.id">
                <div class="card-body">
                  <h5 class="card-title">{{ ghost.name }}</h5> <hr />
                  <p class="card-text"><strong>Strength:</strong> {{ ghost.strength }}</p>
                  <p class="card-text"><strong>Weakness:</strong> {{ ghost.weakness }}</p>
                  <p><strong>Evidence needed:</strong></p>
                  <div v-for="evidence in ghost.evidence" :key="evidence.id">
                    <div v-if="!evidences.found.includes(evidence)">
                      <button @click="selected(evidence)" type="button" class="btn btn-primary mb-1">{{ evidence.name }}</button>
                    </div>
                  </div>
                </div>
                <button @click="captureGhost(ghost)" type="button" class="btn btn-success mb-3">
                  Capture {{ ghost.name }}
                </button>
              </div>
              <div>
                <button class="btn btn-danger mb-3" @click="resetEvidence">
                  Reset Evidence
                </button>
              </div>
            </div>
            <div v-else>
              <div class="card mb-3">
                <div class="card-body">
                  <div class="card-title">This combination of evidence is incompatible.<br />Please
                    ensure evidence is selected correctly.</div>
                  </div>
                  <div>
                    <button class="btn btn-danger mb-3 ms-3" @click="resetEvidence">
                      Reset Evidence
                    </button>
                  </div> 
                </div>
            </div>
          </div>
          <div v-else>
            <div class="card mb-3 border-dark">
              <div class="card-body">
                <h5 class="card-title">Click the evidence above as you find/don't find evidence!</h5>
                <p><strong>Black:</strong> No Evidence Found</p>
                <p><strong class="text-success">Green:</strong> Found</p>
                <p><strong class="text-danger">Red:</strong> This Evidence is Definitely NOT an Option</p>
              </div>
            </div>
          </div>
          <h5>Captured Ghosts:</h5>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Ghosts Caught</th>
                  <th v-for="ghost in localGhosts"
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
                    :key="(ghost.ghostId)"
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
<style>
#phasmo-card {
  min-height: calc(100vh - (66px + 72px));
}
.padded-btn {
  margin-right: 5px;
  margin-top: 5px;
}
/* .padded {
  padding-bottom: 300px;
} */
</style>
