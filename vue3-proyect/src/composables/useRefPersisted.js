import { ref, watch } from 'vue';



export function useRefPersisted(key, defaultValue) {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const state = ref(initial);
  console.log('useRefPersisted ' , key , initial);

  watch(state, value => {
    console.log('watch persisted ' + key );
    localStorage.setItem(key, JSON.stringify(value));
  }, { deep: true , immediate: true});

  return state;
}