---
hello: world

---

<script setup>
import { ref } from 'vue';
import { useData } from 'vitepress';

const { page } = useData();
const count = ref(0);
let name = ref("guest ");
</script>

# Vue Test

The count is: {{ count }}
<!--<pre> {{ page }} </pre>-->

<button :class="$style.button" @click="count++">Increment</button>
<button :class="$style.button" @click="count = 0">Reset</button>

## Hello, {{ name }}

<label for="name">name</label>
<textarea id="name" v-model="name"></textarea>
<button :class="$style.button" @click="name = 'friend'">set</button>

<style module>
.button {
  color: #7ea8ff;
  font-weight: 550;
  border: 2px;
  border-style: solid;
  margin: 2px;
  border-radius: .3rem;
  padding: 2px 4px;
}

.button:hover {
  background-color: #3d3d3d;
}
</style>